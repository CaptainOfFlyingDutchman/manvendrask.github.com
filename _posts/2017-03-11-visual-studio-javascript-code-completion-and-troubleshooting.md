---
layout: post
title: Visual Studio Code &mdash; JavaScript Code Completion and Troubleshooting
tags: [javascript, editor, nodejs]
comments: true
---

Hello folks, Hope you all are doing well with your JavaScript code and probably some CSS and HTML. One thing that makes common among you all and me is we love JavaScript, right? Yes.

But, to write JavaScript is a pain in hands and pressure on mind too.

The major cause that contributes to the side effects of writing JavaScript is bad editors. YES, bad editors. If you have ever worked on Java or .NET, then you probably have an idea what it feels like if the editor is supporting you to type the members of a particular object.

There are very fine editors available e.g., [Sublime Text 3](http://www.sublimetext.com/) and [VIM](http://www.vim.org/). This site is itself written in VIM but let's not discuss them here. Welcome [Visual Studio Code](https://code.visualstudio.com). Its tagline **Code editing. Redefined.** is true, believe me. It's a cross-platform [open source](https://github.com/Microsoft/vscode/) editor available for Windows, Linux, and Mac.

Let's come to the point.

Visual Studio Code has an amazing and impressive JavaScript code editing experience up to its sleeves. For example, see the screenshot below, how it's displaying the **console** in the IntelliSense list. You can open the IntelliSense by pressing **Ctrl+Space** key combination.

![Speaker](/assets/img/vs-code-js-intellisense/js-completion-console.png)

If we go further and try to type **`.`** (single dot/period), the editor will display all the available members, and as you type it'll filter them and then display a brief description of the selected member:

![Speaker](/assets/img/vs-code-js-intellisense/js-completion-console-members.png)
![Speaker](/assets/img/vs-code-js-intellisense/js-completion-console-member-description.png)

It can even display the members of our variables. For example, we have created **manvendra** variable that holds JavaScript object. If we try to type **manvendra.** it'll display its members:

![Speaker](/assets/img/vs-code-js-intellisense/js-completion-variable-members.png)

Isn't it awesome? Yes, surely is. Visual Studio can provide IntelliSense for Browser objects, as well as Node.js objects. For example, let's say we have [Electron](https://electron.atom.io/) project setup in our editor and we would like to use the ES6 destructuring feature and want to import **app**, **BrowserWindow** and **Menu** items from the **electron** object. Here is how Visual Studio Code can help us:

![Speaker](/assets/img/vs-code-js-intellisense/js-completion-node-js-electron.png)

As you can see, when we put the cursor between the curly braces and press **Ctrl+space**, IntelliSense will pop up and display all the available members which we can destruct from the **electron** variable. Isn't it cool? Yes, surely is, folks.

If you might have guessed by now, then yes, Visual Studio Code can even list the events which an object can listen too. For example, **app** object has a **ready** event, which we can listen to and create a **BrowserWindow**, thus creating a new application window:

![Speaker](/assets/img/vs-code-js-intellisense/js-completion-event.png)
![Speaker](/assets/img/vs-code-js-intellisense/js-completion-browser-window-options.png)


Okay, it was some awesome show off of the program. But let's face the truth. How can Visual Studio Code display the IntelliSense for such a typeless language? How is it possible in the first place? The answer lies in [TypeScript](https://www.typescriptlang.org/). Visual Studio Code installs, what are called Type Definition Files **`*d.ts`** and a little TypeScript server called **tsserver**. You can read about them later in the reference section at the end of this blog post.

BUT, this will not work by default, unless you are on the Windows 10 or Windows 7. To get the IntelliSense working on other Operating Systems you have to install **typescript** globally using the command `npm i -g typescript`, and configure a property in the Visual Studio Code settings file to point your path to the installed location of **typescript** package's **lib** folder which you can open by following **File -> Preferences -> Settings**. For example, On my Linux machine I have a setting as follows:

~~~json
{
    "typescript.tsdk": "/opt/node6/lib/node_modules/typescript/lib"
}
~~~

Here is the screenshot of the IntelliSense in action on the Ubuntu 16.04 LTS:

![Speaker](/assets/img/vs-code-js-intellisense/js-completion-node-js-electron-ubuntu.png)

You can also install the **typescript** locally in your app, but that's kind of overkill for a package that you are actually not using.

##### Important Note:
You need at least Node version 6.x to get it working.

&nbsp;

>Thanks for reading till here. See you next time.


#### References:
[https://code.visualstudio.com/docs/editor/intellisense#_intellisense-features](https://code.visualstudio.com/docs/editor/intellisense#_intellisense-features)
[https://code.visualstudio.com/docs/languages/javascript#_intellisense](https://code.visualstudio.com/docs/languages/javascript#_intellisense)

&nbsp;