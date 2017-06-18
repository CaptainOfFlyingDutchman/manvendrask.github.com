key("j", function() {
  scrollWindow("down")
});

key("k", function() {
  scrollWindow("up")
});

function scrollWindow(direction /* up or down */) {
  var up = direction === "up" ? true : false;

  var scrolledSoFar = 0;
  var scrollStep = up ? -5 : 5;
  var scrollEnd  = up ? -70 : 70;
  var timerID = setInterval(function() {
    window.scrollBy(0, scrollStep);
    scrolledSoFar += scrollStep;
    if (up) {
      if( scrolledSoFar <= scrollEnd )  {
        clearInterval(timerID);
      }
    } else {
      if( scrolledSoFar >= scrollEnd ) {
        clearInterval(timerID);
      }
    }
  }, 10);
}