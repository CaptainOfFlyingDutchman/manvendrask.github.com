---
layout: post
title: Why Move to Functional Paradigm &mdash; Example using JavaScript
tags: [javascript]
comments: true
---

JavaScript, a language that is misunderstood more than any other thing on the planet Earth. The reasons are many but the most common is people still think that this can only be used to do some trivial tasks on browser, like validating the forms and interactig with the DOM elements and providing some visual feedback in conjunction with DHTML (Dynamic HTML &mdash; style updation using DOM properties).

And that is called first impression is last impression! So the language gained bad reputation.

Language in itself is very flexible in the programming style. You can use it to do structural programming, object oriented programming or pure functional programming. Consider following example which will capitalize the words of a given sentence. This approach is purely structural.

{% highlight javascript linenos %}
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
{% endhighlight %}

This is very cool program, right? May be yes, but NO. There are various moving parts in this little program. We have many variable declarations, two functions (one of them is ugly named &mdash; `capitalizeText`). The worst thing can be it's not modular and we saved ourselves from that by moving our `result` variable inside `capitalizeText` function.

Functions in themselves are good, but how we are using them is not! Well, this is how structural programming done, and it's called imparative code (*You are explictely telling the program to loop over the words. Is this what we suppose to do? NO, we suppose to capitalize the sentence. We'll see how to fix this later.*).

You see it's just a oridinary code you may write in other languages. JavaScript is not that **bad** either!

Here is the same program in object orientation fashion. But wait, there are no classes in JavaScript, then how can we do object oriented programming? Well, this is called modular programming, and we are really dealing with **Objects** and not their **blueprints** AKA **classes**. This technique is achieved by wrapping whole code in [IIFE (Immediately Invoked Function Expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE).

{% highlight javascript linenos %}
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
{% endhighlight %}

The real benefit that comes from this technique is, we are not populating the global scope with our randome function names. What if somebody else defined `capitalizeText` already? Who knows?

Here you can see we are defining an *Object* that can contain the state and the behaviour that would act upon that state (See, no more global function names and thanks to IIFE that our `Text` object is also not available in global scope, hence in browser console.).

Though we were able to remove some of caveat of our program, but in essense we are still creating those useless variables while capitalizing the words! Moreover, our program is now little more verbose! Remember Java? Let's try to write that feature again in functional approach.


>Thanks for reading till here. See you next time.

&nbsp;