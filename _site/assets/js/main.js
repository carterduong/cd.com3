// inital animation
document.getElementById("info").checked = true;

var inputs = document.querySelectorAll("label");
var projects = document.querySelectorAll(".project");
var column = document.getElementsByClassName("projects-container");

window.addEventListener('resize', function() {
  for (var i = 0; i < inputs.length; i++) {
    var projectYPos = projects[i].offsetTop;
    console.log("resize" + i + ": " + projectYPos);
    inputs[i].addEventListener("click", scroll(document.body, projectYPos, 10), false);
  }
});

for (var i = 0; i < inputs.length; i++) {
  var projectYPos = projects[i].offsetTop;
  console.log(projects[i].offsetParent + " " + projectYPos);
  inputs[i].addEventListener("click", scroll(document.body, projects[i], 10), false);
}

function scroll(element, destination, duration) {
  return function() {
    console.log(destination);
    
    column[0].classList.add("fadeIn");

    setTimeout(function() {
      destination.scrollIntoView(true);
    }, 100);

    setTimeout(function() {
      column[0].classList.remove("fadeIn");
    }, 2700);
  };
}

/*
if bigger that 100vh, go to div's offsetTop
else center the first image in the project
*/