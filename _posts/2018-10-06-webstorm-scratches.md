---
layout: post
title: Scratch files in JetBrains WebStorm
tags: [javascript]
comments: true
---

As a JavaScript (ECMAScript) developers we usually try to run a complex piece of code in browser console before writing it directly into the project. The reason may be anything, but for me it's like to save time that goes into executing the full project cycle, just to check what I wrote is working without any problem.

Although browser consoles have improved a lot, they don't provide complete flexibility in writing the code in it, e.g., *code assistance*, *syntax highlighting*, *indentations* are a few to be named, but are crucial too.

This is where Scratch files come into the picture. Scratch files are a feature of [JetBrains](https://www.jetbrains.com/) IDEs, and, as we used to work on [WebStorm](https://www.jetbrains.com/webstorm/), let's see how we can employ them for our own use and ease our life a little bit in testing the complex code without relying on difficult to tame Browser Consoles windows.

Scratch files can be created by right-clicking on your project name in Project window and select New==>Scratch File, or alternatively just focus the Project window and press **Alt+Ins** keyboard shortcut to bring the context menu. A much better option is to just use the **Ctrl+Alt+Shift+Ins** keyboard shortcut. Then just select the JavaScript option and press Enter to generate the new scratch file.

![Scratch Pop-up](/assets/img/webstorm-scratches/scratch-popup.png)

Now, let's pretend we have a list of items with their **price** and **quantity**. And, we want to calculate total order price, but at the same time, we have a requirement that we have to filter out the items those have zero (0) price on them.

~~~js
const items = [
    { name: 'Cookies', price: 35, quantity: 5 },
    { name: 'Chocolates', price: 65, quantity: 2 },
    { name: 'Juice', price: 20, quantity: 1 },
    { name: 'KissMe Toffee', price: 0, quantity: 5 }
];

const totalPrice = items.filter(item => item.price)
    .reduce((acc, item) => acc += (item.price * item.quantity), 0);

console.info(`Total order price is : Rs. ${totalPrice}`);
~~~

I'm certain that you can't do this much code in Browser Console window. Let's put this code in the scratch file we had created. After writing/pasting this code we need to execute this. We can do this in two ways. Either right click the scratch file's tab and select *Run* item or just use **Ctrl+Shift+F10** keyboard shortcut. Consecutively, you can just press **Shift+F10** to run your scratch file.

![Scratch File Run Menu](/assets/img/webstorm-scratches/scratch-file-run-menu.png)

Then your scratch file executes and the results are shown in the output window.

![Scratch File Output](/assets/img/webstorm-scratches/scratch-file-output.png)

You can even debug your code right in this scratch file. Just put some debug points and select *Debug* from the context menu instead of *Run*.

This is just a little feature we mostly don't know about. I'll come up with one more feature of WebStorm that you can use to simplify your life and the code management.

&nbsp;

>Thanks for stopping by. See you next time.

[^1]: [https://reactjs.org/docs/forms.html](https://reactjs.org/docs/forms.html).
[^2]: [https://github.com/ManvendraSK/react-forms](https://github.com/ManvendraSK/react-forms)
