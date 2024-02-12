// selecting ul 
const listAccordion = document.getElementsByClassName('list-faq')

for (let i = 0; i  < listAccordion.length; i++) {
  listAccordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}