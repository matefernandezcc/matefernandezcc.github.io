const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

let isYesBtnActive = false; // Variable para controlar si el botón "Sí" está activo o no

// Cambiar estado del yesBtn
yesBtn.addEventListener("click", () => {
  if (!isYesBtnActive) {
    isYesBtnActive = true;
    return;
  }
  // Redirigir a la página cuando el botón "Sí" está activo
  window.location.href = "https://matefernandezcc.github.io/agus/";
});

// Mover el noBtn
function moveNoBtn() {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

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
