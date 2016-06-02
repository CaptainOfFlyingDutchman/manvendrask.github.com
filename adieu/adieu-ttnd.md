---
layout: default
title: Goodbye, TO THE NEW Digital!
---

<p style="font-weight: bold; font-size: 2.5rem; font-family: 'Caveat'">Goodbye, TO THE NEW Digital! </p>
----

<style type="text/css">
  #messageContainer {
    font-family: 'Caveat';
    font-size: 1.5rem;
  }
  /* code for animated blinking cursor */
  .typed-cursor{
      opacity: 1;
      font-weight: 100;
      font-size: 1.4rem;
      -webkit-animation: blink 0.7s infinite;
      -moz-animation: blink 0.7s infinite;
      -ms-animation: blink 0.7s infinite;
      -o-animation: blink 0.7s infinite;
      animation: blink 0.7s infinite;
  }
  @-keyframes blink{
      0% { opacity:1; }
      50% { opacity:0; }
      100% { opacity:1; }
  }
  @-webkit-keyframes blink{
      0% { opacity:1; }
      50% { opacity:0; }
      100% { opacity:1; }
  }
  @-moz-keyframes blink{
      0% { opacity:1; }
      50% { opacity:0; }
      100% { opacity:1; }
  }
  @-ms-keyframes blink{
      0% { opacity:1; }
      50% { opacity:0; }
      100% { opacity:1; }
  }
  @-o-keyframes blink{
      0% { opacity:1; }
      50% { opacity:0; }
      100% { opacity:1; }
  }
</style>


<div id="divId">
  <span id="messageContainer" style="white-space:pre;"></span>
</div>

<script src="{{ site.baseurl }}/public/js/jquery.min.js"></script>
<script src="{{ site.baseurl }}/public/js/typed.js" ></script>
<script>
  $(function(){

      
      var message= "^2000Dear Newers,^1000" +

      "\n\n^1000After 3.5 years of ^1000exciting and ^1000memorable stint with TO THE NEW Digital, \n^1000today I am saying goodbye to pursue other career opportunities.^1000" + 

      "\n\n^1000I have enjoyed working for this company and I appreciate having had this \nwonderful opportunity to work with ^1000you all.^1000" +

      "\n\n^1000During this time, ^1000you all have provided me support, and through your \n^1000encouragement I have been able to excel at the work offered to me.^1000" + 

      "\n\n^1000With many of you, I have shared a unique ^1000camaraderie ^1000which I hope \nwill continue in the years to come ^1000even though I shall not be here \nwith the company.^1000" +

      "\n\n^1000I look forward to this new position that brings forth new challenges and \nadds more diverse experience to my career.^1000" + 

      "\n\n^1000I do wish you and the company every success in all future endeavors.^1000" + 

      "\n\n^1000Do stay in touch, with any means you would like below:^1000" + 

      "\n\n^500<span style='color:#ec1c24'>Cell</span> : ^500<a href='tel:+919971641265'>+91 9971641265</a>" +
      "\n^500<span style='color:#0078d7'>Email</span> : ^500<a href='mailto:manvendrask@live.com'>manvendrask@live.com</a>"+
      "\n^500<span style='color:#55acee'>Twitter</span> : ^500Manvendra_SK"+
      "\n^500<span style='color:#4867aa'>Facebook</span> : ^500ManvendraSK"+
      "\n^1000<span style='color:#00aff0'>Skype</span> : manvendrask"+
      "\n^500<span style='color:#005a9c'>Web</span> : ^500<a href='http://www.manvendrask.com'>http://www.manvendrask.com</a>"+


      "\n\n\n^1000Your friend,^1000" +
      "\n^1000Manvendra ^1000Singh^200.^200.^200. ^1500:^300-^300)^500\n^500\n";

      // if ($("body").width() === 375) { // iPhone 6
      //   message = "message for iPhone 6";
      // }
      
      if ($("body").width() === 360) { // BlackBerry Z30
        message = "message for BlackBerry Z30";
      }

      // if ($("body").width() === 320) { // iPhone 5, Nokia 520
      //   message = "message for iPhone 5 and Nokia 520";
      // }


      $("#messageContainer").typed({
          strings: [message],
          contentType: 'html',
          typeSpeed: 30,
          callback: function() {
              clearInterval(timerID);
          },
          
      });

      var timerID = setInterval(function() {
          var scrollEnd = $(document).height() - $("#divId").height()
          window.scrollBy(0, scrollEnd);
      }, 10);


  });  
</script>
