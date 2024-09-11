const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

let isYesBtnActive = false; // Variable para controlar si el botón "Sí" está activo o no

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  if (!isYesBtnActive) {
    // Si el botón "Sí" no está activo, ignorar el clic
    isYesBtnActive = true;
    return;
  }
  // Solo ejecutar esta parte después del segundo toque
  question.innerHTML = "Lo sabía 😇";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmZxOHZyOXNhZHdmMGt0dXNzd2xobzR4aTd0anR0Mmo2YzNxOWYzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMVVnPqbKhnc3Fm/giphy.gif";
});

// Function to randomly move the "No" button
function moveNoBtn() {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Make the No button move randomly on hover (for desktop) or touch (for mobile)
noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevenir que el evento se propague al botón "Sí"
  moveNoBtn();
});
