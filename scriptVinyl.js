let vinyl = document.getElementById("vinyl");
let needle = document.getElementById("needle");
let buttonPlay = document.getElementById("trigger");
let buttonStop = document.getElementById("stop");
let song = document.getElementById("player");
let timePicker = document.getElementById('timer');

buttonPlay.addEventListener("click", function () {

  needle.className -= " moveStop";
  vinyl.className -= " animateStop";
  vinyl.className += " animate";
  needle.className += " move";

  setTimeout(() => {
    needle.className += " movePlay";
    document.getElementsByClassName('movePlay')[0].style['animation-duration'] = song.duration + "s";
  }, 3000);

  setTimeout(() => document.getElementById('player').play(), 3000);

  song.addEventListener('timeupdate', function () {
    timePicker.innerHTML = secondsToTime(song.currentTime);
  }, false);

  function secondsToTime(time) {

    var h = Math.floor(time / (60 * 60)),
      dm = time % (60 * 60),
      m = Math.floor(dm / 60),
      ds = dm % 60,
      s = Math.ceil(ds);
    if (s === 60) {
      s = 0;
      m = m + 1;
    }
    if (s < 10) {
      s = '0' + s;
    }
    if (m === 60) {
      m = 0;
      h = h + 1;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (h === 0) {
      fulltime = m + ':' + s;
    } else {
      fulltime = h + ':' + m + ':' + s;
    }
    return fulltime;
  }


});

buttonStop.addEventListener("click", function () {

  vinyl.className += " animateStop";
  needle.className += " moveStop";
  song.currentTime = 0;
});



