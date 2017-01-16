---
layout: page
title: About
---

{% comment %}
  This inserts the "about" photo and text from `_config.yml`.
  You can edit it there (jekyll needs restart!) or remove it and provide your own photo/text.
  Don't forget to add the `me` class to the photo, like this: `![alt](src){:.me}`.
{% endcomment %}

{% if site.author.photo %}
  ![{{ site.author.name }}]({{ site.author.photo }}){:.me}
{% endif %}

{{ site.author.about }}

I'm also an instructor. I speak for [Java](https://www.java.com/) ([Spring](http://spring.io), [Hibernate](http://hibernate.org), [Groovy](http://www.groovy-lang.org), [Scala](https://www.scala-lang.org/)) and JavaScript ([Node.js](http://nodejs.org), [Angular 1.x](http://angularjs.org), [Angular 2.x](http://angular.io), [Ember.js](http://emberjs.com), [Express.js](http://expressjs.com)) ecosystems. I really like [PostgreSQL](http://www.postgresql.org) and [MongoDB](http://mongodb.org). 

It is my hobby to work on [Qt](https://www.qt.io), and [.NET](https://www.microsoft.com/net/default.aspx) during my spare time.

You can hire me for any of your training needs. Just [tweet](https://twitter.com/intent/tweet?screen_name=Manvendra_SK&text=Need%20an%20instructor.) to me.

***

## References

### Design

* Based on [Hyde](http://hyde.getpoole.com/) by [`@mdo`](https://twitter.com/mdo).

### Icons

* [Wreath](https://thenounproject.com/term/laurel-wreath/203146/) by [Nick Abrams](https://thenounproject.com/nabrams/) from the [Noun Project](https://thenounproject.com/).

[usr]: /how-to-find-a-short-username
