// генератор снега
const snowContainer = document.getElementById('snow');
for (let i = 0; i < 60; i++) {
  const flake = document.createElement('span');
  flake.style.left = Math.random() * 100 + '%';
  flake.style.animationDuration = (Math.random() * 4 + 3) + 's';
  flake.style.opacity = Math.random() * 0.8 + 0.2;
  snowContainer.appendChild(flake);
}

function toggleTheme() {
  document.body.classList.toggle('light');
}