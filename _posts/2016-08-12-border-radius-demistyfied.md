---
layout: post
title: CSS border-radius Demisityfied
tags: [css]
comments: true
---

There were times, when, to get the borders around any element was a tough task, and this was usually done by stitching multiple background images. But the real pain was to maintain them.

Fortunately, CSS came up with a solution and thus a property called `border-radius`. It's the shorthand property of the four well defined properties, which are:

- `border-top-left-radius`
- `border-top-right-radius`
- `border-bottom-right-radius` 
- `border-bottom-left-radius`

The `border-radius` property takes the value(s) in any CSS units for all of the four corners.

{% highlight css linenos %}
  #box1 {
    border-radius: 10px 10px 10px 10px;
  }

  /* equivalent to the following */
  #box2 {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
{% endhighlight %}

`border-radius` property actually works as follows:

- If only one value is set, then this applies to all of the **four** corners.
- If two values are set, then the first one applies to **top-left** and **bottom-right** corners, the second one applies to **top-right** and **bottom-left** corners.
- If three values are set, then the first one applies to **top-left** corner, the second one applies to **top-right** and **bottom-left** corners, the third one applies to **bottom-right** corner.
- If four values are set, then they applies to **top-left**, **top-right**, **bottom-right** and **bottom-left** corners.

This property seems to be behaving much like `border-color`, but this is not the case actually. What is happening here is, the every value we set is set to **x** and **y** radius of the final corner's circle. Confused? The following example would help:

{% highlight css linenos %}

  #box2 {
    border-top-left-radius: 10px 10px; /* x=10px, y=10px */
    border-top-right-radius: 10px 10px; /* x=10px, y=10px */
    border-bottom-right-radius: 10px 10px; /* x=10px, y=10px */
    border-bottom-left-radius: 10px 10px; /* x=10px, y=10px */
  }
{% endhighlight %}

Compare this **#box2** rule to the previous example, and you would get it!

Any curious mind would ask, okay, now how would I set this using the shorthand version of the `border-radius` property? Nice question, I would say. Let's try with the following example:

{% highlight css linenos %}

  #box2 {
    border-radius: 10px 10px 10px 10px 10px 10px 10px 10px; 
  }
{% endhighlight %}

Would this work? Nope! Not at all! This is now an invalid property value! To workaround this, the property has a different syntax, which is **`border-radius: x-radius(es) / y-radius(es)`** (notice the divide or forward slash symbol). Let's see the following example:

{% highlight css linenos %}

  #box2 {
    /**
    * top-left-x=40px, top-left-y=20px;
    * top-right-x=50px, top-right-y=25px;
    * bottom-right-x=60px, bottom-right-y=30px;
    * bottom-left-x=70px, bottom-left-y=35px;
    */
    border-radius: 40px 50px 60px 70px / 20px 25px 30px 35px; 
  }

{% endhighlight %}

This would literally result in following ugly looking box!

<div style="border-radius: 40px 50px 60px 70px / 20px 25px 30px 35px; margin-bottom: 10px; height:100px; width:100px; background-color:#00b0ff"></div>

Let's try some of the cool examples below:

{% highlight css linenos %}

  #box3 {
    /**
    * top-left-x=80px, top-left-y=30px;
    * top-right-x=30px, top-right-y=80px;
    * bottom-right-x=80px, bottom-right-y=30px;
    * bottom-left-x=30px, bottom-left-y=80px;
    */
    border-radius: 80px 30px / 30px 80px; 
  }

  #egg {
    /**
    * top-left-x=50%, top-left-y=60%;
    * top-right-x=50%, top-right-y=60%;
    * bottom-right-x=50%, bottom-right-y=40%;
    * bottom-left-x=50%, bottom-left-y=40%;
    */
    border-radius: 50% / 60% 60% 40% 40%; 
    height: 200px;
    width: 144px; 
  }

  #oval {
    /**
    * top-left-x=50%, top-left-y=50%;
    * top-right-x=50%, top-right-y=50%;
    * bottom-right-x=50%, bottom-right-y=50%;
    * bottom-left-x=50%, bottom-left-y=50%;
    */
    border-radius: 50%; 
    width: 200px;
    height: 100px;
  }
{% endhighlight %}

Results are:

<div id="examples-container">
  <div id="box3" style="float: left; border-radius: 80px 30px / 30px 80px; height:100px; width:100px; background-color:#00b0ff"></div>
  <div id="egg" style="float: left; border-radius: 50% / 60% 60% 40% 40%; height:200px; width:144px; background-color:#00b0ff; margin: 0 10px;"></div>
  <div id="oval" style="float: left; border-radius: 50%; height:100px; width:200px; background-color:#00b0ff"></div>
</div>
<div style="clear:both; margin-bottom: 15px;"></div>

***Important:** Changes to `border-radius` are expensive to calculate, especially on lower powered devices. So in a nutshell, try not to animate this values in CSS!
You have been warned!*

>Thanks for reading till here. See you next time.

&nbsp;