/**
 * Projeto Kamilly
 * @author Felipe 
 */

// ==========================
// 🎞️ Banner Carrossel
// ==========================
const main = document.querySelector('main');
const backgrounds = [
  'url(img/juntos.png)',
  'url(img/amor.png)',
  'url(img/gostosa.png)',
  'url(img/ursinhaa.png)',
  'url(img/gatona.png)',
  'url(img/lindona.png)',
  'url(img/pee.png)',
  'url(img/fk.png)',

];

let indice = 0;

function slider() {
  indice = (indice + 1) % backgrounds.length;
  main.style.backgroundImage = backgrounds[indice];
  main.style.transition = 'background-image 1s ease-in-out';
}

// Troca de imagem a cada 3 segundos
setInterval(slider, 3000);

// ==========================
// 📅 Inserção do ano atual
// ==========================
const ano = document.getElementById('copyrightYear');
const anoAtual = new Date().getFullYear();
ano.textContent = anoAtual;
