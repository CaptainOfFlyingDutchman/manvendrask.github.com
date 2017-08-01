---
layout: page
title: Goodbye, Sapient!
---

<link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet">

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

<script src="{{ site.baseurl }}/assets/js/jquery.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/typed.js" ></script>
<script>
  $(function(){


      var message= "^2000Dear Sapientians," +

      "\n\n^1000After 1.1 years of ^500exciting and ^500memorable stint with Sapient Corporation, \n^1000today I am saying goodbye to pursue other career opportunities." +

      "\n\n^1000I have enjoyed working for this company and I appreciate having had this \nwonderful opportunity to work with ^500you all." +

      "\n\n^1000During this time, ^500you all have provided me support, and through your \n^1000encouragement, I have been able to excel at the work offered to me." +

      "\n\n^1000With many of you, I have shared a unique ^500camaraderie ^500which I hope \nwill continue in the years to come ^500even though I shall not be here \nwith the company." +

      "\n\n^1000I look forward to this new position that brings forth new challenges and \nadds more diverse experience to my career." +

      "\n\n^1000I do wish you and the company every success in all future endeavors." +

      "\n\n^1000Do stay in touch, with any means you would like below:" +

      "\n\n^500<span style='color:#ec1c24'>Cell</span> : <a href='tel:+919971641265'>+91 9971641265</a>" +
      "\n^500<span style='color:#0078d7'>Email</span> : <a href='mailto:manvendrask@live.com'>manvendrask@live.com</a>"+
      "\n^500<span style='color:#55acee'>Twitter</span> : <a target='_blank' href='https://twitter.com/Manvendra_SK'>Manvendra_SK</a>"+
      "\n^500<span style='color:#4867aa'>Facebook</span> : <a target='_blank' href='https://www.facebook.com/ManvendraSK'>ManvendraSK</a>"+
      "\n^500<span style='color:#00aff0'>Skype</span> : manvendrask"+
      "\n^500<span style='color:#005a9c'>Web</span> : <a target='_blank' href='http://www.manvendrask.com'>http://www.manvendrask.com</a>"+


      "\n\n\n^1000Your friend," +
      "\n^1000Manvendra ^500Singh^200.^200.^200. ^1000:^300-^300)^500\n^500\n";

      if ($("body").width() === 375) { 
        message = "^2000Dear Sapientians," +

        "\n\n^1000After 3.5 years of ^500exciting and \n^500memorable stint with Sapient Corporation, \n^1000today I am saying goodbye to \npursue other career opportunities." +

        "\n\n^1000I have enjoyed working for this \ncompany and I appreciate having had \nthis wonderful opportunity to work \nwith ^500you all." +

        "\n\n^1000During this time, ^500you all have \nprovided me support, and through your \n^1000encouragement, I have been able to \nexcel at the work offered to me." +

        "\n\n^1000With many of you, I have \nshared a unique ^500camaraderie ^500which I \nhope will continue in the years to \ncome ^500even though I shall not \nbe here with the company." +

        "\n\n^1000I look forward to this new position \nthat brings forth new challenges and \nadds more diverse experience to my \ncareer." +

        "\n\n^1000I do wish you and the company \nevery success in all future endeavors." +

        "\n\n^1000Do stay in touch, with any means \nyou would like below:" +

        "\n\n^500<span style='color:#ec1c24'>Cell</span> : <a href='tel:+919971641265'>+91 9971641265</a>" +
        "\n^500<span style='color:#0078d7'>Email</span> : <a href='mailto:manvendrask@live.com'>manvendrask@live.com</a>"+
        "\n^500<span style='color:#55acee'>Twitter</span> : <a target='_blank' href='https://twitter.com/Manvendra_SK'>Manvendra_SK</a>"+
        "\n^500<span style='color:#4867aa'>Facebook</span> : <a target='_blank' href='https://www.facebook.com/ManvendraSK'>ManvendraSK</a>"+
        "\n^500<span style='color:#00aff0'>Skype</span> : manvendrask"+
        "\n^500<span style='color:#005a9c'>Web</span> : <a target='_blank' href='http://www.manvendrask.com'>http://www.manvendrask.com</a>"+


        "\n\n\n^1000Your friend," +
        "\n^1000Manvendra ^500Singh^200.^200.^200. ^1000:^300-^300)^500\n^500\n";
      }

      $("#messageContainer").typed({
          strings: [message],
          contentType: 'html',
          typeSpeed: 20,
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
