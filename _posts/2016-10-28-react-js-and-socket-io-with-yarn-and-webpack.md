---
layout: post
title: React.js and Socket.IO based polling app with Yarn and Webpack
tags: [javascript]
comments: true
---

A few days back I came to know about the [Yarn](https://yarnpkg.com/) package manager from [Brij Kishor](https://www.linkedin.com/pulse/you-excited-yarn-brij-kishor-sharma) by his post on [LinkedIn Pulse](https://www.linkedin.com/pulse/you-excited-yarn-brij-kishor-sharma). After reading his post and investigating some of its documentation[^1] I got excited about it.

> In simple terms, you can say it's a better package manager that also works offline.

It manages to do so by storing the dependencies along with their version on the local machine that it calls *local cache*. It resolves any dependency of your new project to this local cache, and if it couldn't find them then it triggers a network call and install the new dependency and caches it.

To test this new package manager I created a new project[^2] using `yarn init`[^3] and added new dependencies using `yarn add <dependency>`[^3].

> Note: You don't need explicit `--save`[^3] switch to add the dependency to your `package.json` file. It's the default behavior. To save the dependency as dev dependency you can use `--dev`[^3] switch.

The project[^2] I created is based on [React.js](https://facebook.github.io/react/) and [Socket.IO](http://socket.io/). My aim was to create a real-time polling app based on these two technologies. I also wanted a POC[^2] on how we can integrate Socket.IO with React.js. [Webpack](https://webpack.github.io/) is used as a bundler.

It was a smooth process, due to the reactive nature of React.js and event based system of Socket.IO. You just need to subscribe to certain events of the Socket.IO in your React.js component or emit the events from your React.js component and listen to them on the server.

To integrate the Socket.IO in React.js just attach a client socket in the top level component's [`componentWillMount()`](https://github.com/ManvendraSK/react-poll/blob/master/components/App.js#L28) hook. Simple!

{% highlight javascript linenos %}
import React, { Component } from 'react';
import io from 'socket.io-client';

export default class App extends Component {
	componentWillMount() {
		this.socket = io('http://localhost:3000');
		// Use socket here
	}

	render() {
		return(
			<h2>App</h2>
		);
	}
}
{% endhighlight %}

I might want to add `Socket.IO + React.js = Smooth real time app`.

Why so?

It's because when you listen to the Socket.IO server events inside your components you update the component's local state or the central storage if you are using [Redux](http://redux.js.org/). Based on this state change React.js re-renders the component automatically. No extra work on your behalf, just listen to the Socket.IO server events.

In this project, you will see a real-time pie chart board that gets updated based on the polls of the audiences on the response of the questions asked by the speaker. Follows some screenshots.

![Speaker](/public/img/react-js-and-socket-io/speaker.png)
![Attendee question](/public/img/react-js-and-socket-io/question.png)
![Attendee answer](/public/img/react-js-and-socket-io/answered.png)
![Result Board](/public/img/react-js-and-socket-io/board.png)

&nbsp; &nbsp;

>Thanks for reading till here. See you next time.

[^1]: [https://yarnpkg.com/en/docs/](https://yarnpkg.com/en/docs/).
[^2]: [https://github.com/ManvendraSK/react-poll](https://github.com/ManvendraSK/react-poll).
[^3]: [https://yarnpkg.com/en/docs/cli/](https://yarnpkg.com/en/docs/cli/).