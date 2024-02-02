let openModal = document.getElementById('open-modal')
let modalContainer = document.getElementById('modal-container')
let closeModal = document.getElementById('close-modal')

openModal.addEventListener('click', () => {
  modalContainer.style.display = 'block'
})

closeModal.addEventListener('click', () => {
  modalContainer.style.display = 'none'
})

modalContainer.addEventListener('click', (e) => {
  if(e.target === modalContainer) 
  modalContainer.style.display = 'none'
})