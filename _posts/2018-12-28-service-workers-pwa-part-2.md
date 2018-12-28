---
layout: post
title: An Idiot's Guide to Service Workers &mdash; Troubleshooting &mdash; Part 2
tags: [javascript]
comments: true
---

Welcome! You must be coming here from [Part 1]({% post_url 2018-12-28-service-workers-pwa-part-1 %}) of this article, where I discussed how to implement the SW for a production site or you are just curious why certain things are not working with SW.

This article is about the backstory on how we accomplished the SW and what were the issues we ran into, and how we approached them. Quite a task it was.

There were basically two main problems which we encountered:

1. Browser cache storage was exceeding the allowed quota.
2. CORS issue while serving the assets from the CloudFront. 

Let's talk about these issues. 

### The Problems and The Solution

Our SW implementation was working fine while we were serving assets from our project's `dist` or `build` directory. But it was having some problems while we were serving those from the CloudFront on our Staging and Production environments. The main culprit was *Cache Storage Quota* was exceeding than the browser allotted to the application. This resulted in not processing/caching remaining assets by the SW.

What was the problem? The problem was simple. We were getting lots of errors about [CORS (Cross-Origin Resource Sharing)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). It's a simple mechanism that makes use of some additional HTTP headers that allows one application running on one server to access the resources running on a separate server. In our case we were serving our assets from the CloudFront, that was different from our application server, and we had a little idea on how to allow CORS requests on it. Although, we knew that somewhere on the CloudFront we need to add `Access-Control-Allow-Origin` header, but WHERE? 

Solution? We approached the Infrastructure team for the help. Sadly, they had a little idea on it too, 😐. Now what? Fortunately, that error also suggested one solution to request the resources from our SW file with `no-cors` header. 

But this solution had the limitation that when we request the resource using `no-cors` header, the resulted response is considered `Opaque Response`. More on this next. We quickly tried that out and updated our `sw.js` file as follows:

~~~js
// sw.js

const customPreCacheName = 'traveltriangle-precache-msiv1';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(customPreCacheName)
      .then(cache => {
        self.__precacheManifest.forEach(a => {
          const request = new Request(a.url, { mode: 'no-cors' });
          fetch(request).then(response => cache.put(request, response));
        });
      })
  );
});

// Commented default precaching supplied by the Workbox
// workbox.precaching.precacheAndRoute(self.__precacheManifest);
~~~

Here, we are intercepting the SW `install` event and opening the custom cache and manually creating a `Request` object and putting the response in the cache. BUT, it didn't work. We were still exceeding the allotted quota! 😐. 

We were struggling in understanding the characteristics of this issue properly. But we were having one thing clear, the problem was with the Opaque Response. We researched more and stumbled upon one [Stackoverflow](https://stackoverflow.com/questions/39109789/what-limitations-apply-to-opaque-responses/39109790#39109790) link, where we came to know that whenever we get the Opaque Response, the `Cache Storage API` had problems with dealing it.

Cache Storage API adds extra 7 Megabytes content padding around the response, due to the reason of Opaque Response resulted in the [Response.status](https://fetch.spec.whatwg.org/#concept-response-status) set to `0` and not `2XX`, even when the request was successful.  

So we concluded that the two problems were related. *The quota was exceeding because our CORS headers were not correct on the CloudFront*. We were back to the original problem on how to set the CORS headers on the CloudFront. 

We went through the CloudFront documentation and found a [link](https://aws.amazon.com/premiumsupport/knowledge-center/no-access-control-allow-origin-error/) that mentioned where to add the required headers. This was the time now to fix the problem. We altered one of the Behavior and whitelisted the `Access-Control-Allow-Origin` header.

So, we changed the headers setting from this: 

![cf-no-cache](/assets/img/service-workers-pwa/cf-no-cache.png)

to this:

![cf-whitelist-header](/assets/img/service-workers-pwa/cf-whitelist-header.png)

And all was working for good. Right? NO! Now, what on earth could possibly go wrong? We had whitelisted the header already, 😐. 

There was one thing we overlooked that browser always sends encoding header. We verified this by copying the request from the `Network` tab as `Curl`. The curl command had a switch `--compressed`. Voila, this was missing from the CloudFront. Thus we also whitelisted `Accept-Encoding` header as shown below:

![cf-whitelist-headers-encoding](/assets/img/service-workers-pwa/cf-whitelist-headers-encoding.png)

Peace! Everything is sorted now. SW was happy, `fetch` was happy, `Cache` was happy, We were too!

### Conclusion

From the starting to the end we were sure of one thing, we need to set `Access-Control-Allow-Origin` on the CloudFront. But it was a miss from our Infrastructure team. The cost was the delay in rolling out the feature. Sometimes only coding doesn't solve the problem alone, we also need to pay attention to the environment configuration.

This was really not our task to alter the CloudFront configuration, but we had to stretch out a bit. I think this is what we all meant when we write in our Resume, *Willing to go for an extra mile*, right?

I would like to pay special thanks to one of my colleagues [Rahul Jain](https://www.linkedin.com/in/rahul-jain-1479ba51/) for his valuable efforts in debugging and solving this issue. And yes, we reverted our custom caching code you just witnessed above.


&nbsp;

>Thanks for stopping by. See you next time.
