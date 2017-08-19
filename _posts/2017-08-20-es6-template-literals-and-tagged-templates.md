---
layout: post
title: ES6 Template Literals and Tagged Templates
tags: [javascript]
comments: true
---

String concatenation has always been the pain in the ass as a Web Developer and especially if you are writing JavaScript. You tend to forget frequently the `+` signs in between the *variables* and the *user strings*. Many server-side languages have much flexible string concatenation system built in. [Scala](http://scala-lang.org/) and [Groovy](http://www.groovy-lang.org/) are those I know about currently on JVM (Java Virtual Machine). Although [CoffeeScript](http://coffeescript.org/) has supported this new type of string concatenation for a long time, recently ES6 has got them too and are known as *Template Literals*.

What does a Template Literals look like? Consider the example where you need to create a combo box of people, from a provided data set.

~~~coffee
const people = [
  {
    name: 'Manvendra Singh',
    id: 'manvendrask'
  },
  {
    name: 'Kirti Nandwani',
    id: 'knandwani'
  },
  {
    name: 'Brij Kishor',
    id: 'hackishor'
  }
];

const options = people.map(person => '<option value="' + person.id + '">' + person.name + '</option>').join('');
const html = '<select name="people" id="people">' + options + '</select>';

document.querySelector('#people_div').innerHTML = html; # Given we have some div with id of people_div on it.
~~~

Do you see how we are creating the `option` elements and finally the `select` element? Isn't that difficult? Can you understand that? Can you write that? Neither do I! I myself faced many difficulties in creating those `option` elements. I was constantly confused between those `"double quotes"` and `'single quotes'`.

Let's see now how the new Literal Templates feature can rescue us here:

~~~coffee
const options = people.map(person => `<option value="${person.id}">${person.name}</option>`).join('');
const html = `<select name="people" id="people">${options}</select>`;

document.querySelector('#people_div').innerHTML = html; # Given we have some div with id of people_div on it.
~~~

Can you get it now? Let me explain. Literal Templates are the strings which are surrounded by a pair of backticks **`** instead of the double or single quotes. Between these backticks, we can write our user string along with putting the variables inside a pair of curly braces which are preceded by a dollar sign.

Can you get it now? Of course, you can! By the way, if you noticed I'm using a `join` method on the return value of `map` function. It's because by default arrays elements are converted to comma separated string when used inside some string operation.

Here is the output by the way:

![Template literals select output](/assets/img/es6-template-literals-and-tagging-templates/template-literals-select-output.png)

Now if you ask what are the `Tagged Templates`? Then, it's a way of passing the Template Literal to a user defined function that returns the final string. Let's take an example:

~~~coffee
const string = `This string contains a \t tab and\n one new line character.`;
console.log(string);
# Output
# This string contains a   tab and
#  one new line character.
~~~

As the output shows the JavaScript engine process the special characters. What if we didn't want those special characters to be expanded? Consider following:

~~~coffee
const string = String.raw`This string contains a \t tab and\n one new line character.`;
console.log(string);
# Output
# This string contains a \t tab and\n one new line character.
~~~

What happened? What is that `String.raw` doing there before our Template Literal?

My friend, that `String.raw` is called a `Tag Function`. This Tag Function process the Template Literal and returns a new string. Getting it now? What is happening here is there is a `raw` function defined on the `String` object. The code snippet below shows its signature and how it's being internally called by the JavaScript runtime while processing the Template Literal.

~~~coffee
String.prototype.raw = (strings, ...values) => {
  # strings is an array
  # ...values is also an array that contains all of the rest parameters passed to this function.
};

String.raw(["This string contains a \t tab and\n one new line character."]);
~~~

To understand more on this function signature lets consider following example where we would be creating our Tagging Function to return the same string which would otherwise be returned by the JavaScript runtime (we are just mimicking the built-in behavior):

~~~coffee
const taggingFunc = (strings, ...values) => strings.reduce((sentence, string, index) => `${sentence}${string}${values[index] || ''}`, '');

const name = 'Manvendra Singh';
const id = 'manvendrask';
const introduction = taggingFunc`Hello I'm ${name}, and my id is ${id}`;
console.log(introduction); // Hello I'm Manvendra Singh, and my id is manvendrask

# It's how JavaScript runtime have called this taggingFunc
# taggingFunc(["Hello I'm ", ", and my id is ", ""], name, id);
~~~

Let's see what's happening here. The `taggingFunc` receives two parameters, the first one contains an array that contains all of the user defined string literals, as can be seen from the last comment, and the second one contains rest of the variables values which is also an array, but it contains values at the runtime because there can be any number of arguments from the Template Literal.

Here we are just building a whole string by using the [`Array.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method, along with adding the values from the `values` array.

Here are two things to notice though:
1. `strings` variable would always be one more in the size than that of `values`.
2. If the variables substitution ends the Template Literal then the `strings` array contains an empty string value at the end, and if the variable substitution starts the Template Literal then the `strings` array contains an empty string value at the start.

Still confused? Let's take an example:

```coffee
function tagFunc(strings, ...values) {

}

# tagFunc(["Hello this is a variable at the ", ""], "end");
const string = tagFunc`Hello this is a variable at the ${'end'}`;

# tagFunc(["", " this line with a variable"], "Starting");
const string2 = tagFunc`${'Starting'} this line with a variable`;
```

As you can see from the comments how the `strings` and `values` variables are populating. It's simple and straight forward.

To add to more knowledge on this feature Tagged Templates of ES6, let's go through one example. Suppose we want to build up a custom introductory string for a web developer and replacing and abbreviating the acronyms using `<abbr>` HTML tag.

~~~coffee
const dictionary = {
  JS: "JavaScript",
  HTML: "Hyper Text Markup Language",
  CSS: "Cascading Style Sheets"
};

function abbreviate(strings, ...values) {
  const abbreviations = values.map(value => {
    if (dictionary[value]) {
      return `<abbr title="${dictionary[value]}">${value}</abbr>`
    }
    return value;
  });

  return strings.reduce((sentence, string, i) => `${sentence}${string}${abbreviations[i] || ''}`, '');
}

const name = 'Manvendra Singh';

const introduction = abbreviate`Hello, I'm ${name}, and I blog about ${'HTML'}, ${'JS'} and ${'CSS'}!`;
document.querySelector('.bio').innerHTML = introduction;  # Given we have a div with bio class on it.
~~~

Here is the output:

![Abbreviated output](/assets/img/es6-template-literals-and-tagging-templates/abbreviated-output.png)

I think this last example might have shed some light on how important this concept can be. We can use this concept to build custom DSLs (Domain Specific Languages), e.g., we can wrap the [DOMPurify](https://github.com/cure53/DOMPurify) library in a Tagging Function and sanitize our strings, much like `String.raw` does.

Last but not least, ES6 String Literals and Tagging Templates are as cools as other features of the language, like *Destructuring*, *Generators* and *Iterators*, and the list goes on!

&nbsp;
> Thanks for being here till now. See you next time.

