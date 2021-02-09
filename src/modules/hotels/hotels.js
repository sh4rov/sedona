// hide hotels-search
let hotelsOpen = 'hotels-search_open' // toggle class
let hotelsBlock = document.querySelector('.hotels-search')
let hotelsButton = document.querySelector('.hotels__button')

hotelsButton.addEventListener('click', () => {
  hotelsBlock.classList.toggle(hotelsOpen)
})



// counters
let buttonAdd = document.querySelectorAll('#add');
let buttonSubstract = document.querySelectorAll('#substract');
let input = document.querySelectorAll('#inputValue');

buttonAdd.addEventListener('click', () => {
  input.value = parseInt(input.value) + 1;
})

buttonSubstract.addEventListener('click', () => {
  input.value = parseInt(input.value) - 1;
})