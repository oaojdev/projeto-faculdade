let tempo = 25 * 60; 
let intervalo = null;

const timerDisplay = document.querySelector('#timer h2');
const startBtn = document.getElementById('start-btn');
const modeButtons = document.querySelectorAll('.mode-buttons button');

function atualizarDisplay() {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  timerDisplay.textContent =
    `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

function iniciarTimer() {
  if (intervalo) return;

  intervalo = setInterval(() => {
    atualizarDisplay();
    tempo--;

    if (tempo < 0) {
      clearInterval(intervalo);
      intervalo = null;
      timerDisplay.textContent = "00:00";
    }
  }, 1000);
}

function alterarModo(e) {
  modeButtons.forEach(btn => btn.classList.remove('active'));

  e.target.classList.add('active');

  tempo = parseInt(e.target.dataset.minutos) * 60;

  clearInterval(intervalo);
  intervalo = null;

  atualizarDisplay();
}

startBtn.addEventListener('click', iniciarTimer);
modeButtons.forEach(btn => btn.addEventListener('click', alterarModo));

atualizarDisplay();
