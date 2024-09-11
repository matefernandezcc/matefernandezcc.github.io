const noButton = document.getElementById('no-btn');
const siButton = document.getElementById('si-btn');

// Mover el botón "No" cuando el ratón pase sobre él
noButton.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// Reemplazar el contenido con un gráfico de flores al hacer clic en "Sí"
siButton.addEventListener('click', () => {
    // Limpiar el contenido del body
    document.body.innerHTML = '<canvas id="flowerCanvas"></canvas>';

    // Obtener el contexto de dibujo de Chart.js
    const ctx = document.getElementById('flowerCanvas').getContext('2d');

    // Generar datos paramétricos para las flores
    const data = {
        datasets: [{
            label: 'Flores',
            borderColor: 'yellow',
            borderWidth: 3,
            fill: false,
            data: generateFlowerData()
        }]
    };

    // Crear el gráfico con Chart.js
    new Chart(ctx, {
        type: 'scatter',
        data: data,
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    min: -2,
                    max: 2
                },
                y: {
                    min: -2,
                    max: 2
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});

// Función para generar los puntos que dibujan una flor
function generateFlowerData() {
    const points = [];
    const numPetals = 7; // Número de pétalos
    const steps = 1000; // Cantidad de puntos en la curva
    for (let i = 0; i < steps; i++) {
        const t = (i / steps) * 2 * Math.PI;
        const r = Math.sin(numPetals * t); // Función radial
        const x = r * Math.cos(t); // Coordenada x
        const y = r * Math.sin(t); // Coordenada y
        points.push({ x: x, y: y });
    }
    return points;
}
