const cartas = document.querySelectorAll('.cards');

let cartavirada = false;
let blockCard = false;
let primeiroCard, secondCard;

function girarCard() {
  if (blockCard) return;
  if (this === primeiroCard) return;

  this.classList.add('flip');

  if (!cartavirada) {
    cartavirada = true;
    primeiroCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = primeiroCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? parargiro() : desvirar();
  
}

function parargiro() {
  primeiroCard.removeEventListener('click', girarCard);
  secondCard.removeEventListener('click', girarCard);

  reset();
  alert("oi");
}

function desvirar() {
  blockCard = true;

  setTimeout(() => {
    primeiroCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    reset();
  }, 1500);
}

function reset() {
  [cartavirada, blockCard] = [false, false];
  [primeiroCard, secondCard] = [null, null];
}

(function embaralhar() {
  cartas.forEach(card => {
    let aleatoriaPosi = Math.floor(Math.random() * 16);
    card.style.order = aleatoriaPosi;
  });
})();

cartas.forEach(card => card.addEventListener('click', girarCard));