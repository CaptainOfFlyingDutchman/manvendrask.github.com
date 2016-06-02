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

      
      var message= "Dear Newers," +

      "\n\nAfter 3.5 years of exciting and memorable stint with TO THE NEW Digital, \ntoday I am saying goodbye to pursue other career opportunities." + 

      "\n\nI have enjoyed working for this company and I appreciate having had this \nwonderful opportunity to work with you all." +

      "\n\nDuring this time, you all have provided me support, and through your \nencouragement I have been able to excel at the work offered to me." + 

      "\n\nWith many of you, I have shared a unique camaraderie which I hope \nwill continue in the years to come even though I shall not be here \nwith the company." +

      "\n\nI look forward to this new position that brings forth new challenges and \nadds more diverse experience to my career." + 

      "\n\nI do wish you and the company every success in all future endeavors." + 

      "\n\nDo stay in touch, with any means you would like below:" + 

      "\n\n<span style='color:#ec1c24'>Cell</span> : <a href='tel:+919971641265'>+91 9971641265</a>" +
      "\n<span style='color:#0078d7'>Email</span> : <a href='mailto:manvendrask@live.com'>manvendrask@live.com</a>"+
      "\n<span style='color:#55acee'>Twitter</span> : Manvendra_SK"+
      "\n<span style='color:#4867aa'>Facebook</span> : ManvendraSK"+
      "\n<span style='color:#00aff0'>Skype</span> : manvendrask"+
      "\n<span style='color:#005a9c'>Web</span> : <a href='http://www.manvendrask.com'>http://www.manvendrask.com</a>"+


      "\n\n\nYour friend," +
      "\nManvendra Singh...";

      if ($("body").width() === 375) { // iPhone 6
        message = "message for iPhone 6";
      }
      
      if ($("body").width() === 360) { // BlackBerry Z30
        message = "message for BlackBerry Z30";
      }

      if ($("body").width() === 320) { // iPhone 5, Nokia 520
        message = "message for iPhone 5 and Nokia 520";
      }


      $("#messageContainer").typed({
          strings: [message],
          contentType: 'html',
          typeSpeed: 1,
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
