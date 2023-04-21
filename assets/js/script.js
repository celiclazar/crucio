const panelButton = document.querySelector('.panel-button');
const panel = document.querySelector('.panel');

console.log("value of panelButton" + panelButton);
panelButton.addEventListener('click', function() {
  panel.classList.toggle('active');
});