---
layout: post
title: Basics of Wiring and Configuration of Spring Beans
tags: [java]
comments: true
---


I'm writing an application, a Java application. Is it a web or a normal (console or swing) application? Does it matter? No. What is important, it's a Java application. 

To build this my new awesome application, what do I need? Yes, you are right, objects. 

A lot of them. A lot that eventually lead me to a `new` keyword hell. What is worse?, I'm coding to concerete implementations instead of interfaces.

One may ask, how to instantiate an object if I'm not supposed to use `new` keyword? 

Reflection? May be yes, may be not.

Suppose I've a class called `Box` as follows:

{% highlight java linenos %}
package com.manvendrask.spring;

public class Box {
  int width;
  int height;
  int breadth;

  public Box() {}
  public Box(int w, int h, int b) {
    this.width = w;
    this.height = h;
    this.breadth = b;
  }

  public int getWidth() {
      return width;
  }

  public void setWidth(int width) {
      this.width = width;
  }

  // Other getters and setters  
}
{% endhighlight %}

Now, let's use this class in a main program.

{% highlight java linenos %}
package com.manvendrask.spring;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

public class Main {
  public static void main(String... args) {
    try {
      Class<?> box = Class.forName("com.manvendrask.spring.Box");
      try {
        Constructor<?> threeArgumentConstructor = box.getConstructor(int.class, int.class, int.class);
        try {
          Box newInstance = (Box) threeArgumentConstructor.newInstance(1, 2, 3);
          System.out.println("Box width is: " + newInstance.getWidth());
        } catch (InstantiationException e) {
          e.printStackTrace();
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        } catch (InvocationTargetException e) {
          e.printStackTrace();
        }
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      }
    } catch (ClassNotFoundException e) {
      e.printStackTrace();
    }
  }
}
{% endhighlight %}

What the F***? I'm quitting programming.

So much code for simple instantiation of the object?