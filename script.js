// Get the buttons
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Position the "No" button initially
noBtn.style.left = "50%";
noBtn.style.top = "60%";

// Function to move the "No" button to a random position
function moveNoButton() {
  const x = Math.floor(Math.random() * (window.innerWidth - 120));
  const y = Math.floor(Math.random() * (window.innerHeight - 120));
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Make "No" button run away whenever hovered or clicked
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

// Show a sweet message when "Yes" is clicked
yesBtn.addEventListener('click', () => {
  alert("Yay! You said Yes — you’re my Valentine!");
});
