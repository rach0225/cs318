// The list of image URLs
var urls = [
    'couple1.jpg',
    'senior 6.jpg',
    'family1.jpg',
    'senior7.jpg',
    'wedding2.jpg',
    'couple2.jpg',
  ];
  
  // The index (serial number) of the current image
  var i = 0;
  
  // Grab handles onto HTML elements.
  var leftButton = document.getElementById('left');
  var rightButton = document.getElementById('right');
  var picture = document.getElementById('picture');
  
  // Retreat
  leftButton.onclick = function() {
    i = (i - 1 + urls.length) % urls.length;
    picture.src = urls[i]; 
  }
  
  // Advance
  rightButton.onclick = function() {
    i = (i + 1) % urls.length;
    picture.src = urls[i]; 
  }