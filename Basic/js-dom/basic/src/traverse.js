// * Traversing from parent
// ! Node != Element

// let ul = document.querySelector('ul')

// console.log(ul.parentElement) // section
// console.log(ul.parentNode.parentNode) //body

// const html = document.documentElement

// console.log(html.parentNode) // document because the dom tree say that
// console.log(html.parentElement) // null because no tag in that parent

// * Traversing from child

// let ul = document.querySelector('ul')

// // The enter is include as childNodes
// console.log(ul.childNodes)
// console.log(ul.firstChild) // selecting the first child
// console.log(ul.lastChild) // selecting the last child

// // you can style using index notation
// ul.childNodes[1].style.color = 'blue'

// // to count all the children
// console.log(ul.children)
// console.log(ul.firstElementChild) // to get element of first child
// console.log(ul.lastElementChild) // to get element of last child

// * Traversing from sibling

let div = document.querySelector('div')
let ul = document.querySelector('ul')

// ? get the previous and next element
console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)
