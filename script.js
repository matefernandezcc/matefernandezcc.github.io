const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Código para el fondo de flores
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 3 + 2 + 's'; // Entre 2 y 5 segundos
    flower.style.animationDelay = Math.random() * 5 + 's'; // Hasta 5 segundos de retraso
    
    document.getElementById('flower-container').appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 7000); // Ajusta este tiempo según la duración de la animación
}

// Crear flores de manera continua
setInterval(createFlower, 300); // Cada 300ms se genera una flor nueva

let isYesBtnActive = false; // Variable para controlar si el botón "Sí" está activo o no

// Cambiar estado del yesBtn
yesBtn.addEventListener("click", () => {
  if (!isYesBtnActive) {
    isYesBtnActive = true;
    return;
  }
  question.innerHTML = "Lo sabía 😇";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmZxOHZyOXNhZHdmMGt0dXNzd2xobzR4aTd0anR0Mmo2YzNxOWYzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMVVnPqbKhnc3Fm/giphy.gif";
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
