---
layout: post
title: Making a Calendar in React.js with CSS Grid
tags: [javascript, css, reactjs]
comments: true
---

Hey there! It's been a long time since I wrote something 🙄. So, I thought to start writing about something I've been up to for 2 months now, *Learning CSS!!*. Yep, I suck at CSS and I tried to learn it finally. After learning some of the cool features of CSS like Flexbox and Grid, I wanted to try them on a real project. So, I came up with the idea of creating a simple Calendar in React.js that's laid down using CSS Grid as you can see above.

This Calendar facilitates moving between months using the **chevron** icons on the top right corner. You can even jump to a particular month of choice by clicking on the month name in the header that will pop open a month selector. Sweet 🥳! *Demo is at the end of this article.*

![calendar](/assets/img/react-calendar-css-grid/calendar.png)
![month-selector](/assets/img/react-calendar-css-grid/month-selector.png)

This article will describe how you can make a simple calendar using React.js without resorting to any third party plugin and meanwhile using the CSS Grid to place the month dates at proper positions. 


### Laying Out the Dates of a Month

The simplest thing you can do is to iterate over the dates of a month and get some HTML elements for each of the dates, e.g., span HTML element.

The code that does this trick is below:

~~~js
class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <DaysOfMonth />
      </div>
    );
  }
}

class DaysOfMonth extends Component {
  const days = daysInMonth(4); // Get the days in month of May. Defined inside date.js file.
  render() {
    return days.map((day, i) => {
      return (
        <span key={i}>
          {day}
        </span>
      );
    };
  }
}
~~~

By using this code you'll get nothing except a long list of `span` elements. To convert them into proper calendar like grid, we can give the `calendar` rule a `display: grid` and `grid-template-columns: repeat(7, 1fr);` properties.

~~~css
.calendar {
  width: 400px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
~~~

Tada!! This will get you something like shown below. I'm using here [Firefox DevTools](https://developer.mozilla.org/en-US/docs/Tools) to inspect the grid.

This is not a perfect calendar but it looks like a bit calender-*ish*! If you notice properly then you'll find the Month of **May 2020** starts with **Friday** and if we consider that the first day of the week is **Sunday** then we have to move the date **1** of **May 2020** month on column 6 (1-based index). How we can do this? Well, CSS Grid provides a property `grid-column-start` which takes a 1-based index value that specifies on which column a certain Grid-item should be placed. We just now need to calculate that value.

We have to create a function that calculates the *First Day of a Given Month*. Updated code is after the following image.

![month-selector](/assets/img/react-calendar-css-grid/skeleton.png)

~~~js
class DaysOfMonth extends Component {
  const days = daysInMonth(4); // Get the days in month of May. Defined inside date.js file.
  const dayToBeginTheMonthFrom = firstDayOfMonth(this.props.month); // Get the first day of a given month. Defined inside date.js file.
  const style = { gridColumnStart: dayToBeginTheMonthFrom + 1 }; // We are adjusting here for the 1-based index that the CSS Grid expects.

  render() { 
    return days.map((day, i) => {
      return (
        <span key={i} 
          style={i === 0 ? style : {}} {/* <-- This line will set the correct column. */}
        >
          {day}
        </span>
      );
    };
  }
}
~~~

The result you can see in the image below:

![month-selector](/assets/img/react-calendar-css-grid/skeleton-2.png)

We have finished with the core of displaying the Calendar. Now all that remains is to style this Grid and Grid-items and the Calendar header, week-row and its behaviour, which I think you can see on the [CodeSandbox](https://codesandbox.io/s/react-calendar-tmriy) &mdash; Demo is below of this article 😎.

Oh yes, I used CSS gradients a lot as I was reading about them a lot recently. Please don't shout at me if I have offended you! 😇.


<iframe
     src="https://codesandbox.io/embed/react-calendar-tmriy?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-calendar"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

&nbsp;

>Thanks for stopping by. See you next time.
