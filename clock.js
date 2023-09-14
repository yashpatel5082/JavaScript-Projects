function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
var watch = (function(){
    var timer = document.getElementById("timer");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
    var time = "00:00"
    var seconds = 0;
    var minutes = 0;
    var t;
  
    timer.textContent = time;
  
    function buildTimer () {
      seconds++;
          if (seconds >= 60) {
              seconds = 0;
              minutes++;
              if (minutes >= 60) {
                  minutes = 0;
                  seconds = 0;
              }
          }
      timer.textContent = (minutes < 10 ? "0" + minutes.toString(): minutes) + ":" + (seconds < 10 ? "0" + seconds.toString(): seconds);
    }
    function stopTimer () {
      stop.addEventListener("click", function(){
        clearTimeout(t);
      })
    }
    function startTimer () {
      start.addEventListener("click", function(){
        clearTimeout(t);
        t = setInterval(buildTimer,1000);
      });
    }
    function resetTimer () {
      reset.addEventListener("click", function(){
        timer.textContent = time;
        seconds = 0; minutes = 0;
      });
    }
    return {
      start: startTimer(),
      stop: stopTimer(),
      reset: resetTimer()
    };
  })()