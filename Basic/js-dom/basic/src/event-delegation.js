// ? event delegation
// * adalah menerapkan kepada satu elemen parent sebuah event listener yang nantinya event tersebut dapat di gunakan child nya 
// * dan juga ini akan berfungsi juga di child yang baru di buat 

// ! dari pada kita apply 1 per 1 pada setiap id child nya kita bisa melakukan seperti ini

document.querySelector('.sports').addEventListener('click', (e) => {
  console.log(e.target.getAttribute('id') + ' is clicked')

  const target = e.target
  
  if (target.matches('li')) {
    target.style.backgroundColor = 'darkgray'
  }
})