---
layout: post
title: Node.js Debugging Enhancements
tags: [javascript, nodejs, editor]
comments: true
---

DEBUGGING has always been a needed part of the Node.js and its support was first made mainstream by the [Visual Studio Code]({% post_url 2017-03-11-visual-studio-javascript-code-completion-and-troubleshooting %}) (More on in later in the post). Starting with the current LTS release v6.x.x of Node.js we can also use familiar Chrome DevTools.

We can say that Node.js debugging has come a long way since its inception `console.log` statements, starting with command line client to VS Code to Chrome DevTools integration.

Let's get started with each of these in the reverse order when they appeared.

### 1. Chrome DevTools
Let's say you have some script in file `index.js`

~~~coffee
const os = require('os');

const cpus = os.cpus();

console.log(`${cpus.length} cpus found. Details follows.`);

cpus.forEach((cpu, i) => {
    console.log(`Model: ${cpu.model}`);
});
~~~

This simple script just finds out how many CPUs are on the host machine and prints their model. To debug this script in DevTools you can execute the command `node --inspect --debug-brk index.js`. This command would spin up a V8 inspector on default port 9229 (can be changed by the option `--inspect=8888`) and attach the Chrome DevTools to Node.js instance, allowing us debugging and profiling. This command would result in something like as shown in the figure below:

![V8 Inspector spun](/assets/img/nodejs-debugging-enhancements/inspector-spun.png)

Just copy the URL starting with *chrome-devtools://* and paste inside Chrome's new tab. You'll be welcome by the DevTools with your script loaded in the **Sources** tab, breaking on the *first* line. The script has a default breakpoint on the first line due to the presence of the `--debug-brk` switch in the previous command. If you forget to specify this switch then nothing will be loaded in the inspector and the script execution would come to end instantly (which you can verify in the previous image that we didn't get our prompt back). Here is how it looks like:

![V8 Inspector action 1](/assets/img/nodejs-debugging-enhancements/inspector-in-action.png)

Now you can just add few *breakpoint* by clicking on the gutter in the left. You can *step into* and *step over* in the code using the toolbar on the right pane, and can add *watch* statements in the right pane, as you can see in the image below:

![V8 Inspector action 2](/assets/img/nodejs-debugging-enhancements/inspector-in-action-2.png)

You can verify the **watch** pane is showing the value of `cpu.length`. We are inspecting `cpus` constant by hovering our mouse over it.

> **NOTE**: If you noticed in the DevTools we see our whole code is wrapped inside an anonymous function. We didn't add that, did we? Absolutely NOT! Well, this is how Node.js makes the declarations local in the module and we need to add something on `module.exports` to be available outside of the current module to other modules. This anonymous function is what that provides a particular module with the `module`, `exports`, `require`, `__dirname` and `__filename` variables. Every thought about it? Not? It's okay.
{:.message}
{:.lead}


### 2. VisualStudio Code
To debug the scripts in VisualStudio Code we again need to do some homework. Let's see what's that.

**WARNING**: I'll not take any responsibility if you fall in love with the [VisualStudio Code]({% post_url 2017-03-11-visual-studio-javascript-code-completion-and-troubleshooting %}) and can't resist to replace it with your default editor. By the way, it is the first editor that introduced the support for Graphical Debugging for Node.js.
{:.message}

The first step is to open your code folder in the VS Code. *Manvendra, that's obvious, please don't tell us.*

From the left side panel select the 4th icon, that has Bug on it. You'll see the following screen.  

![VS Code debug panel 1](/assets/img/nodejs-debugging-enhancements/vscode-debug-panel.png)

On the top part of the Debug panel, we can see some icons and drop-down menu. The drop-down menu says **No configuration**. Select the Gear icon next to it and a pop will open. Select the *Node.js* menu item in it.

![VS Code debug panel 2](/assets/img/nodejs-debugging-enhancements/vscode-debug-panel-2.png)

VS Code will create a new file at `.vscode/launch.json`. This file contains various settings, but the minimal settings is shown in the image below:

![VS Code debug panel 3](/assets/img/nodejs-debugging-enhancements/vscode-debug-panel-3.png)

The most important one is **program** key. It would point to your main file. In our case, we have the **index.js** file. **workspaceRoot** is a special variable that VS Code uses internally to point to the currently loaded project directory. Now just add some breakpoints in the editor gutter and hit the **play** button in the debug panel. A new toolbar would then visible on top which contains all the usual debugging buttons. As you can see in the image below, we have our **watch** setup and mouse hovering in action.

![VS Code debug panel 4](/assets/img/nodejs-debugging-enhancements/vscode-debug-panel-4.png)

More information on this configuration file is available at [https://code.visualstudio.com/docs/nodejs/nodejs-debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)


### 3. Node Debug Client
For those who love command prompt or terminal, there is a separate workflow for the debugging. It's similar to the **GNU C Debugger** popularly know as [GDB](https://www.gnu.org/software/gdb/). To start the script execution in debug mode you would need to execute the command `node debug index.js`. The debugger would by default listen on the port `5858`. You can type `help` for the available commands.

![Node client 1](/assets/img/nodejs-debugging-enhancements/node-client.png)

By default, the debugger would launch the program in `break` state, so, to execute the program type `cont` and you would see the script result instantly. But that's not what we are using node debugger for, right? So let's start script execution again using the `restart` debugger command and then set the breakpoint on line number 5 and 8 using `sb(5)` and `sb(8)`. You can also add watches, e.g., to watch the variable `cpus` and `i`, type `watch('cpus')` and `watch('i')`.

Now type `cont` to begin the execution of the program, note how the program execution stops at line 5 denoted by *break in* statement. You can see how the debugger showing us our watchers. If you note carefully, the second watcher `i` is showing `"<error>"`. Why is that? It's simple, `i` is not in the scope of debugging context, simple!

![Node client 2](/assets/img/nodejs-debugging-enhancements/node-client-2.png)

You can evaluate the script in the debugging context by typing `repl` command. This would drop you in debugger repl (read eval print loop). You can also inspect variables by using `exec` command. E.g., as you can see in the image below, I'm inspecting `cpu` using `exec cpu`.  Please note how watchers list showing the current value of `i` but `cpus` in error state. To go to next line type `next` command. You can also list all the available watchers by using the command `watchers`.

![Node client 3](/assets/img/nodejs-debugging-enhancements/node-client-3.png)

A full list of commands and their usages is available at [https://nodejs.org/dist/latest-v6.x/docs/api/debugger.html](https://nodejs.org/dist/latest-v6.x/docs/api/debugger.html).

## Conclusion
Technology has always made the human life simple, and this debugging technology is much useful for the people writing software.

Debugging support has traveled a great distance. In my opinion, I would always use [VisualStudio Code]({% post_url 2017-03-11-visual-studio-javascript-code-completion-and-troubleshooting %}) as I don't want to leave my development environment where I have already opened the files I'm working on. If I rely on Chrome DevTools I would have to open each file again and then set the breakpoints, which is neither productive nor logical.

I recommend staying far away from Node.js's debugging client. It's not super easy to use. I highly advocate debugging your code while writing instead after deploying.


&nbsp;
> Thanks for being here till now. See you next time.

