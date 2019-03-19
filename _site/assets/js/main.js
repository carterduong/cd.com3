/*** Init ***/
document.getElementById("info").checked = true;

/*** Variables ***/

var inputs = document.querySelectorAll("label");
var project_divs = document.querySelectorAll(".project");
var projects_column = document.getElementsByClassName("projects-container");

/*** Event Listeners ***/

window.addEventListener('resize', function() {
  for (var i = 0; i < inputs.length; i++) {
    var projectYPos = project_divs[i].offsetTop;
    console.log("resize" + i + ": " + projectYPos);
    inputs[i].addEventListener("click", scroll(document.body, projectYPos, 10), false);
  }
});

window.addEventListener('scroll', function() {
  console.log(window.scrollY);
});

// if scrollY > div-distanceToCenter

for (var i = 0; i < inputs.length; i++) {
  var projectYPos = project_divs[i].offsetTop;
  inputs[i].addEventListener("click", scroll(document.body, project_divs[i], 10), false);
}

/*** Functions ***/

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
        window.scrollTo(0, destination.offsetTop - distanceToCenter);
      }, 100);
    }

    setTimeout(function() {
      projects_column[0].classList.remove("fadeIn");
    }, 2700);
  };
}