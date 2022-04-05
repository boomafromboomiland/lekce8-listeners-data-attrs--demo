const tlacitka = document.querySelectorAll('.tlacitko-pozdravu');
console.log(tlacitka);

tlacitka.forEach((tlacitko) => {
tlacitko.addEventListener('click', (udalost) => {
  console.log('Ahoj ' + udalost.target.innerHTML);
});
});
