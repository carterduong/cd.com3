// inital animation
document.getElementById("info").checked = true;

var inputs = document.querySelectorAll("label");
var project_divs = document.querySelectorAll(".project");
var projects_column = document.getElementsByClassName("projects-container");

window.addEventListener('resize', function() {
  for (var i = 0; i < inputs.length; i++) {
    var projectYPos = project_divs[i].offsetTop;
    console.log("resize" + i + ": " + projectYPos);
    inputs[i].addEventListener("click", scroll(document.body, projectYPos, 10), false);
  }
});

for (var i = 0; i < inputs.length; i++) {
  var projectYPos = project_divs[i].offsetTop;
  inputs[i].addEventListener("click", scroll(document.body, project_divs[i], 10), false);
}

function scroll(element, destination, duration) {
  return function() {
    projects_column[0].classList.add("fadeIn");
    
    if (destination.offsetHeight > window.innerHeight) {
      setTimeout(function() {
        destination.scrollIntoView();
      }, 100);
    } else {
      var distanceToCenter = (window.innerHeight - destination.offsetHeight) / 2;
      setTimeout(function() {
        element.scrollTop = destination.offsetTop - distanceToCenter;
      }, 100);
    }

    setTimeout(function() {
      projects_column[0].classList.remove("fadeIn");
    }, 2700);
  };
}

/*
if bigger that 100vh
  go to div's offsetTop
else 
  calculate div height

*/