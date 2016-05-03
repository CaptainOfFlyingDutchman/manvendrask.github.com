---
layout: post
title: VIM like Navigation on a Web Page
tags: [javascript]
comments: true
---

Most of us who use [VIM](http://www.vim.org) for their day to day editing tasks, I can bet, really love its key bindings, especially, character navigation keys i.e., `h`, `j`, `k`, `l`. Then, wouldn't it be a cool idea to allow your users to use `j` and `k` keys to scroll `down` and `up` your page? After all, you can see it in action on the Facebook itself.

Let's implement this feature. 

To implement this feature you just need to hook up the `keydown` event for the `document` object, as shown below:

{% highlight javascript linenos %}

  window.document.onkeydown = function(event) {  
    if (event.keyCode == 74) { 
      window.scrollBy(0, 100);
    } else if (event.keyCode == 75) {
      window.scrollBy(0, -100);
    }
  };

{% endhighlight %}

Here, we are checking if the key pressed is `j` whose code is `74` then we scroll down by 100 pixels, else if the key pressed is `k` whose code is `75` then we scroll up by 100 pixels. Easy huh? But wait, if you notice, it would move the page up and down abruptly, and not smoothly. Moreover, this is not the correct way to write an event handler. We should use `addEventListener()` method, as shown below:

{% highlight javascript linenos %}

  window.document.addEventListener("keydown", function(event) {
    if (event.keyCode == 74) { 
      window.scrollBy(0, 100);
    } else if (event.keyCode == 75) {
      window.scrollBy(0, -100);
    } 
  });

{% endhighlight %}

The reason we switched over to `addEventListener()` method is, it allows us to execute multiple `function`s for the same event. But, it is not the case with the first approach, because, if we would again assign a new `function` to the `onkeydown` property, the previous `function` would then be overwritten. 

Okay, enough theory, get back to work.

You know what, there is a concept of reusing the already written code, known as, **Don't reinvent the wheel**. So, for our purpose, we would be using a library called *Keymaster* from [https://github.com/madrobby/keymaster](https://github.com/madrobby/keymaster). This library provides us with a main `key()` function, which allows us to assign various key combinations on a web page. Internally it's doing exactly same things, what we are doing here in our previous examples.

Let's use this library to achieve the same result again.

{% highlight html linenos %}
  <!-- Load the libaray -->
  <script src="/public/js/keymaster.js" ></script>
  
  <script>
    key("j", function() {
      scrollWindow("down")
    });

    key("k", function() {
      scrollWindow("up")
    });

    function scrollWindow(direction /* up or down */) {
        var up = direction === "up" ? true : false;

        var scrolledSoFar = 0;
        var scrollStep = up ? -5 : 5;
        var scrollEnd  = up ? -70 : 70;
        var timerID = setInterval(function() {
            window.scrollBy(0, scrollStep);
            scrolledSoFar += scrollStep;
            if (up) {
              if( scrolledSoFar <= scrollEnd )  {
                clearInterval(timerID);
              }
            } else {
              if( scrolledSoFar >= scrollEnd ) {
                clearInterval(timerID);
              }
            }
        }, 10);
    }
  </script>

{% endhighlight %}

The above code is doing the same thing, binding the `j` key and calling `scrollWindow()` function with `down` parameter, and again binding the `k` key and calling `scrollWindow()` function with `up` parameter. What's special here is how the `scrollWindow()` function is using `setInterval()` method to rapidly calling `window.scrollBy()` method, thus rendering the smooth scrolling, when we press the keys.

If you would like to test this feature on your own then just press `j` or `k` keys right here on this page. And you'll see, the page is moving up and down smoothly. In fact, this whole site is using the above code, but obviously a minified version of the library.

#### Conclusion:
Some people may argue, that to add custom key bindings is not good for web pages, but IMHO every website should provide certain keybindings. For example, a `/` key to focus on search field much like Facebook, Google, Gmail and YouTube do.

>Thanks for reading till here. See you next time.

