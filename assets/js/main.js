// inital animation
document.getElementById("info").checked = true;
/*
function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
  }, 10);
}
*/
// add eventlistener to each label
// eventlistener
// get pixel location of the top of each project
var inputs = document.querySelectorAll("label");
var projects = document.querySelectorAll(".project");
var column = document.getElementsByClassName("projects-container");

for (var i = 0; i < inputs.length; i++) {
  var a = projects[i].offsetTop;
  inputs[i].addEventListener("click", scroll(document.body, a, 10), false);
}

function scroll(element, to, duration) {
  return function() {
    console.log(to);

    column[0].classList.add("fadeIn");

    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    window.scrollTo(0, to);
    /*
    setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
    */

    setTimeout(function() {
      column[0].classList.remove("fadeIn");
      column[0].classList.remove("fadeIn");
    }, 3000);
  };
}

