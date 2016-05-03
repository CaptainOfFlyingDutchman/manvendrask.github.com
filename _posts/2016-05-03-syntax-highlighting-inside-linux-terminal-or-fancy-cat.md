---
layout: post
title: Syntax Highlighting inside Linux Terminal (a fancy cat command)
tags: [linux]
comments: true
---

Did you ever feel the need to display the content of some file, may be a **Java** or **HTML**, on the terminal? Yes, you are right. For this purpose, we use **cat** command that comes bundled with any Linux distribution. 

But you know what, the output is plain *boring*! What if you wanted to display the content of the file in the same way as you have opened it inside any text editor, may be [vim](http://www.vim.org).

There is a well known [Python](https://www.python.org/) program known as **[Pygments](http://pygments.org/)**. This program provides syntax highlighting support and has now become the de-facto standard. To install Pygments, we would need a third party program that manages software which is written in Python. This program is **[Pip](https://pip.pypa.io/en/stable/)**.

Let's install and configure Pip and Pygments. 

Pip is most probably already installed if you have Python 2 (>= 2.7.9) or Python 3 (>= 3.4) installed on your machine, which is the case on any modern Linux distribution. If this is not the case, then I recommend to upgrade your Python installation or else follow along if you don't want to upgrade your python installation. 

> Please not, the following procedure may leave your system in an inconsistent state if your Python installation is managed by your system (e.g., **dnf**, **apt-get**, etc).

Download the Pip installer script from [https://bootstrap.pypa.io/get-pip.py](https://bootstrap.pypa.io/get-pip.py), and execute with the command `python get-pip.py`[^1]. 

Now, as we have our Pip installation working which we can check by executing the command `pip --version`, lets install Pygments, which is as easy as if you execute the command `pip install Pygments`[^1]. This would install a program **/usr/bin/pygmentize**, which we can use along with `-g` switch, that would auto-detect the lexer of the file and print the file content in the correct highlighting scheme. Following is an example:

{% highlight bash linenos %}
  pygmentize -g card_layout.cpp 
{% endhighlight %}

Instead of writing this lengthy command we could *alias* it by writing a line `alias kat="pygmentize -g"` inside our **.bashrc** file. Now our previous example would also work by executing following command: 

{% highlight bash linenos %}
  kat card_layout.cpp
{% endhighlight %}

I don't know what are your opinions on it, but I personally prefer my **kat** alias instead of **cat** command to output the file content. For a note for the **kat** alias, we can't display the line numbers as the **cat** command does by utilizing its **-n** switch.

>Thanks for reading till here. See you next time.

[^1]: You may need to execute the command using `sudo`.
