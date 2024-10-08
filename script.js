const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

let isYesBtnActive = false; // Variable para controlar si el botón "Sí" está activo o no
let noBtnClickCount = 0; // Contador para limitar el número de clicks en el botón "No"

// Cambiar estado del yesBtn
yesBtn.addEventListener("click", () => {
  if (!isYesBtnActive) {
    isYesBtnActive = true;
    return;
  }
  // Redirigir a la página cuando el botón "Sí" está activo
  window.location.href = 'carta.html';
});

// Mover el botón "No" a una nueva posición dentro de los límites de la pantalla
noBtn.addEventListener("click", () => {
  if (noBtnClickCount < 3) {
    noBtnClickCount++;

    // Asegurar que el botón "No" no se salga de los límites visibles
    noBtn.style.width = `${noBtn.offsetWidth - 25}px`;
    noBtn.style.height = `${noBtn.offsetHeight - 1}px`;

    // Aumentar el tamaño del botón "Yes"
    yesBtn.style.width = `${yesBtn.offsetWidth + 20}px`;
    yesBtn.style.height = `${yesBtn.offsetHeight + 20}px`;

    // Cambiar el texto según el número de clics
    if (noBtnClickCount === 1) {
      noBtn.textContent = "Eh";
    } else if (noBtnClickCount === 2) {
      noBtn.textContent = "¿Apretaste mal?";
    } else if (noBtnClickCount === 3) {
      noBtn.textContent = "mmmm";
    }
    
    
  } else {
    // Cuando se llega al cuarto clic, cambiar el texto a "Siiiii"
    noBtn.textContent = "bue...";
    setTimeout(() => {
      window.location.href = 'carta.html';
    }, 2000);
  }
});

// Lógica para el botón "Sí"
yesBtn.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = 'carta.html';
  }, 2000);
});
