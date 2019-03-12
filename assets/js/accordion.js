var sections = document.querySelectorAll('input');

for (var i = 0; i < sections.length; i++) {
  var height = sections[i].nextElementSibling.scrollHeight;
  console.log(height);
  sections[i].style.height = height;
}