---
layout: post
title: Why Move to Functional Paradigm &mdash; Example using JavaScript and Java 8
tags: [javascript, java]
comments: true
---

JavaScript, a language that is misunderstood more than any other thing on the planet Earth. The reasons are many but the most common are people still think that this can only be used to do some trivial tasks on the browser, like validating the forms and interacting with the DOM elements and providing some visual feedback in conjunction with DHTML (Dynamic HTML &mdash; style update using DOM properties).

And that is called the first impression is the last impression! So the language gained a bad reputation.

Language in itself is very flexible in the programming style. You can use it to do **structural programming**, **object oriented programming** or pure **functional programming**. Consider the following example which will capitalize the words of a given sentence. This approach is purely structural.

~~~js
function capitalizeText() {
    const text = prompt('Enter some string to capitalize.', 'lorem ipsum dolar');
    const result = capitalize(text);
    alert(result);
}

function capitalize(text) {
    const words = text.split(' ');
    const transformedSentence = [];

    for (let inc = 0; inc < words.length; inc++) {
        let word = words[inc];
        let capitalizedWord = [word.substring(0, 1).toUpperCase(), word.substring(1)].join('');
        transformedSentence.push(capitalizedWord);
    }

    return transformedSentence.join(' ');
}

window.addEventListener('DOMContentLoaded', capitalizeText);
~~~

This is a very cool program, right? Maybe yes, but NO. There are various moving parts in this little program. We have many variable declarations, two functions (one of them is ugly named &mdash; `capitalizeText`). The worst thing can be, it's not modular and we saved ourselves from that by moving our `result` variable inside `capitalizeText` function.

Functions in themselves are good, but how we are using them is not! Well, this is how structural programming is done, and it's called imperative code (*You are explicitly telling the program to loop over the words. Is this what we suppose to do? NO, we suppose to capitalize the sentence. We'll see how to fix this later.*).

You see it's just an ordinary code you may write in other languages. JavaScript is not that **bad** either!

Here is the same program in object orientation fashion. But wait, there are no classes in JavaScript, then how can we do object oriented programming? Well, this is called modular programming, and we are really dealing with **Objects** and not their **Blueprints** AKA **Classes**. This technique is achieved by wrapping whole code in [IIFE (Immediately Invoked Function Expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE).

~~~js
(function() {
    'use strict';

    const Text = function (text) {
        this.text = text;
    };

    Text.prototype.capitalizeWord = function (word) {
        return [word.substring(0, 1).toUpperCase(), word.substring(1)].join('');
    };

    Text.prototype.capitalizeSentence = function () {
        const words = this.text.split(' ');
        const transformedSentence = [];

        for (let inc = 0; inc < words.length; inc++) {
            transformedSentence.push(this.capitalizeWord(words[inc]));
        }

        return transformedSentence.join(' ');
    };

    window.addEventListener('DOMContentLoaded', function () {
        const text = prompt('Enter some string to capitalize.', 'loram ipsum dolar');
        let textObj = new Text(text);
        alert(textObj.capitalizeSentence());
    });
})();
~~~

The real benefit that comes from this technique is, we are not contaminating the global scope with our random function names. What if somebody else defined `capitalizeText` already? Who knows?

Here you can see we are defining an *Object* that can contain the state and the behavior that would act upon that state (See, no more global function names and thanks to IIFE that our `Text` object is also not available in the global scope, hence in the browser console.).

Though we were able to remove some of the caveats of our program, but in essence, we are still creating those useless variables while capitalizing the words in the **for** loop! Moreover, our program is now little more verbose! Remember Java? Let's try to write that feature again in the functional approach.

~~~js
(function() {
    'use strict';

    function capitalizeWord(word) {
        return [word.substring(0, 1).toUpperCase(), word.substring(1)].join('');
    }

    function capitalize(wordsCapitalizer, text) {
        return text.split(' ').map(wordsCapitalizer).join(' ');
    }

    window.addEventListener('DOMContentLoaded', function () {
        const text = prompt('Enter some string to capitalize.', 'loram ipsum dolar');
        alert(capitalize(capitalizeWord, text));
    });
})();
~~~

Well, the program has become too short, which is obvious, thanks to the functional approach of programming. But the real benefit here is, we no more are declaring intermediate variables and keeping a particular computation to only respective function.

This behavior where functions are not modifying any global value or creating any side effect (like opening a DB connection, writing to a file), always give us a particular result for the provided input. These functions are called *pure functions*.

In this program, you can see we are utilizing a technique called function composition. This is possible because functions are treated as a first class citizen in the language, it means you can assign them to variables and pass to other functions as arguments just like any ordinary data type.

One thing you might have overlooked in the code is, we no more have a **for** loop! We are actually utilizing [`Array.map()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function. `map` function calls the specified function `wordsCapitalizer` with the individual elements of the array we get from the `split` function call. We can think this this way that map is internally looping and calling the `wordsCapitalizer` function for each array element.

Let's talk about a little bit of Java now.

You might think that Java is only an object oriented language, but folks, let me introduce you to the functional aspects of the Java 8 language. Java 8 introduced functional constructs, thus facilitating functional programming approach along with object oriented programming approach.

~~~java
package com.manvendrask;

import java.util.Arrays;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {
        String text = "lorem ipsum dolar";

        Function<String, String> capitalizeWord = word ->
                Arrays.stream(new String[]{word.substring(0, 1).toUpperCase(), word.substring(1)})
                        .collect(Collectors.joining(""));

        BiFunction<Function<String, String>, String, String> capitalize = (capitalizeWordFn, textToSplit) ->
                Arrays.stream(textToSplit.split(" "))
                        .map(capitalizeWord)
                        .collect(Collectors.joining(" "));

        System.out.println(capitalize.apply(capitalizeWord, text));
    }
}
~~~

In this Java code, you can see how we are assigning the block of code (methods) to variables `capitalizeWord` and `capitalize`. These are called **Lambda Expressions**. They represent the underlying methods of the target [FunctionalInterface](https://docs.oracle.com/javase/8/docs/api/java/lang/FunctionalInterface.html). The important part to notice is we are passing these methods around much like JavaScript's functions. Moreover, that `map` method is available on the separate API layer called Streams in Java 8.

In a nutshell, Java 8 now provides the same functional capabilities much like other functional languages, but not yet fully supported. The real caveat is it's still verbose, because of the fact that it's type safe, as you can see yourself we are using `BiFunction<Function<String, String>, String, String>` functional interface to define `capitalize` method, that internally is the implementation of the `BiFunction.apply` method.

The conclusion is functional approach is a much flexible approach of the programming, but only certain languages are available to do it efficiently. We have here many choices, but for me, it's either JavaScript or Java/Scala/Groovy. I would choose JavaScript because it's less cluttered and less verbose, and Scala over the Java (in JVM) because Java is more verbose.

Follow the functional approach and be a better programmer. Long live **JavaScript!!!**

>Thanks for reading till here. See you next time.

&nbsp;