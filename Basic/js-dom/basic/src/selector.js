// ? Dom tree 
// ? HTML > Head, Body
// ? Head > tittle
// ? Body > main > h1

/* 
  * GetElementById
  * To get element by id
*/
const tittle = document.getElementById('selector')
console.log(tittle)

/*
  * GetElementByClassName
  * To get element by Class
*/
const h1 = document.getElementsByClassName('text-main')
console.log(h1)


/*
 * GetElementByTagName
 * To get element by Tag like <h3>
 * this can be select all of tag 
*/
const h3 = document.getElementsByTagName('h3')
console.log(h3)

/*
 * querySelector
 * To get first item that match the selector
 * this can select tag, class or id
*/
const text = document.querySelector('#text')
console.log(text)

/*
 * querySelectorAll
 * To get all item that match the selector 
 * This works similar like query selector
*/
const textMain = document.querySelectorAll('.text-main')
console.log(textMain)