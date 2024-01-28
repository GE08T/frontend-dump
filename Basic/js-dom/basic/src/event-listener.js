// * adding add event listener

const buttonTwo= document.querySelector('.btn-2')

buttonTwo.addEventListener('click', () => {
  alert('Hello This is Button two')
}) // ? event alert

// ? mouseover 

const newBackgroundColor = document.querySelector('.card-3')

newBackgroundColor.addEventListener('mouseover', () => {
  newBackgroundColor.style.backgroundColor = 'blue'
}) 

// * using it to add and remove classes
const btnReveal = document.querySelector('.reveal-btn')
const textReveal = document.querySelector('.hidden-content')

btnReveal.addEventListener('click', () => {
  if (!textReveal.classList.contains('reveal-btn')) {
    textReveal.classList.add('reveal-btn')
  } else {
    textReveal.classList.remove('reveal-btn')
  }
})