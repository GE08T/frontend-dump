// ? We Can add Css With Style property
// * css in style property written by cammel case

// * This is when we apply to an element
const had = document.querySelector('h1')
had.style.color = 'darkgray'

// * This is when we apply to many classes
const listItems = document.querySelectorAll('.list-item')

// ? For Loop
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.padding = '1rem'
}

// ? For Each Loop
listItems.forEach(item => {
  item.style.color = 'blue'
})

// * Creating Element 
const ul = document.querySelector('ul')
const li = document.createElement('li')

// * Adding Element in ul
ul.append(li)

// * Modifying text

// ? with innerHTML
// ? with textContent
// ? with innerText
li.innerHTML = 'Halo'


// * Modifying attribute & classes
li.setAttribute('class', 'list-item')
li.classList.add('parah')

// * Remove attribute & classes
li.removeAttribute('class', 'list-item')
li.classList.remove('parah')

// * Getting Attribute
const main = document.querySelector('main')
main.getAttribute('id')

// * Check if Element contains class
console.log(li.classList.contains('parah'))

// * Remove Element
li.remove()