---
layout: post
title: "Angular 2: Up and Running"
tags: [javascript]
---

We have come a long way since the release of Angular [v0.9.x.](https://github.com/angular/angular.js/tree/v0.9.x) We now have [Angular 2](https://angular.io/). Although it’s still in beta version. Angular 2 is radically different from its predecessor, Angular 1. We no more can write an Angular application using just ng-app directive, that kicks off everything, and initialize angular bindings and lot of other stuff.

As Angular 2 has its dependency over [TypeScript](http://typescriptlang.org/) language, we need something more to setup an application now. We’ll see how to bootstrap an Angular 2 application, and how to build a custom Gravatar component (we’ll talk what are components, as we move ahead), that would fetch user’s image from Gravatar as we enter the email address.

To begin with we need a text editor. I’m using WebStorm for the projects. But that would be overkill to use for this purpose. My personal favorite is [Visual Studio Code](https://code.visualstudio.com/) for the JavaScript development. Point to note here, as both the TypeScript and Visual Studio Code are from the house of Microsoft, they have added an excellent support of TypeScript in Visual Studio Code.

Let’s get started now!

First, create an empty directory let’s call it **angular2-quickstart**, wherever you like in the file system, and create three files, as I’m showing below. (for the note, you can clone the repository from [https://github.com/ManvendraSK/angular2-quickstart](https://github.com/ManvendraSK/angular2-quickstart)).

#### 1. package.json

~~~json
{
  "name": "angular2-quickstart",
  "version": "1.0.0",
  "scripts": {
    "start": "concurrently \"npm run tsc:w\" \"npm run lite\" ",
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "lite": "lite-server",
    "typings": "typings",
    "postinstall": "typings install"
  },
  "license": "ISC",
  "dependencies": {
    "angular2": "2.0.0-beta.9",
    "systemjs": "0.19.24",
    "es6-promise": "^3.0.2",
    "es6-shim": "^0.33.3",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.2",
    "zone.js": "0.5.15"
  },
  "devDependencies": {
    "concurrently": "^2.0.0",
    "lite-server": "^2.1.0",
    "typescript": "^1.8.7",
    "typings":"^0.7.5"
  }
}
~~~

This file lists all the dependencies and dev dependencies, along with some handy scripts. Among these scripts is a **start** script that runs two other scripts concurrently, **tsc:w** and **lite**. **tsc:w** compiles the TypeScript files as we change them, and **lite** is a lite server that reloads the browser, whenever any asset changes in our application.

#### 2. typings.json

~~~json
{
  "ambientDependencies": {
    "es6-shim": "github:DefinitelyTyped/DefinitelyTyped/es6-shim/es6-shim.d.ts#4de74cb527395c13ba20b438c3a7a419ad931f1c",
    "jasmine": "github:DefinitelyTyped/DefinitelyTyped/jasmine/jasmine.d.ts#d594ef506d1efe2fea15f8f39099d19b39436b71"
  }
}
~~~

This file lists all the dependencies, which are actually TypeScript Definitions, and are required by TypeScript compiler. This is necessary, as TypeScript needs to know how to work with these JS libraries. Thus, these files listed inside the **ambientDependencies** basically provide the definitions of the symbols, nothing fancy.

If you remember from the **package.json** file, we have listed **typings** as a dev dependency. This is the tool that manages these definition files. To list all the installed dependencies we can execute `npm run typings -- list`. Notice, we are here providing double dashes before the arguments of **typings** command. That’s because we are actually executing the script listed in the **package.json**, and to pass the arguments to the actual command we need these double dashes.  To search for the dependencies execute `npm run typings -- search lodash`. We are searching here for the `lodash` library definitions. Execute `npm run typings -- help` for the help on this command.

#### 3. tsconfig.json

~~~json
{
  "compilerOptions": {
    "target": "es5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules",
    "typings/main",
    "typings/main.d.ts"
  ]
}
~~~

This file lists the instructions for the TypeScript compiler itself. I suggest you going through [https://angular.io/docs/ts/latest/guide/typescript-configuration.html#!#tsconfig](https://angular.io/docs/ts/latest/guide/typescript-configuration.html#!#tsconfig) and [http://www.typescriptlang.org/docs/handbook/compiler-options.html](http://www.typescriptlang.org/docs/handbook/compiler-options.html) after finishing here.

We are finished with the listings of the dependencies for our Angular 2 application. Now just execute the `npm install` command, and this would download all the dependencies. This command will also execute the **postinstall** script listed inside the **package.json** file automatically, that would install all the TypeScript definitions listed inside **typings.json** file.

Now go ahead and create an **index.html** file and an **app** folder. The resulting directory should be looking as follows:

~~~bash
angular2-quickstart/
|-- app/
|-- typings/
|-- node_modules/
|-- index.html
|-- package.json
|-- tsconfig.json
|-- typings.json
~~~