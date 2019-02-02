var acc = document.getElementsByClassName("text-container desktop");
var i;

for (i = 0; i < acc.length; i++) {
  // collapse everything but the first entry
  if (i > 0) {
    for (var j = 1; j < acc[i].childElementCount; j++) {
      acc[i].children[j].style.display = "none";
    }
  }

  acc[i].firstElementChild.addEventListener("click", function() {
    /*var children = acc[i].childNodes;
    for (var j = 0; j < children.length; j++) {
      var child = children[j];
      child.style.display = "none";
    }*/

    // define active
    // all active
    // set node to active
  });
}