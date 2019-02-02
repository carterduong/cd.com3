window.addEventListener('scroll', function() {

  // looping scroll
  if (pageYOffset >= document.body.clientHeight - window.innerHeight) {
    window.scrollTo(pageXOffset, 0);
  }
});