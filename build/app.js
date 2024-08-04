document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `
        <h1>Bienvenido a StayAway</h1>
        <p>Encuentra tu alojamiento perfecto</p>
        <button id="startButton">Comienza tu búsqueda</button>
    `;

    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', () => {
        alert('Iniciando búsqueda...');
    });
});
