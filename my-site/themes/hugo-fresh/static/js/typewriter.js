const typeAnimation = document.querySelector('[type-animation]');
const typeAnimationText = typeAnimation.textContent;
typeAnimation.textContent = "";

let i = 0;
setInterval(function() {
  if (i < typeAnimationText.length) {
    typeAnimation.textContent += typeAnimationText.charAt(i);
    i++;
  }
}, 50);
