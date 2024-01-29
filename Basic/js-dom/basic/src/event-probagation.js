// event probagation adalah bagaimana cara dom bekerja pada javascript
// ada 3 fase yaitu event capturing, target, event bubbling

{/* <section class="event-probagation">
  <h1 id="tittle">Halo</h1>
  <div>
    <button>click</button>
  </div>
</section> */}

// jika kita ingin menambahkan event kedalam button maka javascript akan menulusi nya dari : window > document > html > body > section > div > button ini dinamakan event capturing
// jika sudah di temukan maka akan menyeleksi target yang kemudian akan di kembalikan ulang / di telusuri ulang kembali ke window dengan event bubbling

// ? method yang berguna dalam event probagation adalah stopPropagation dan preventDefault 

// ? kode di bawah ini adalah menggunakan parameter e untuk event dan menggunakan method target untuk menyeleksi target dan menghapus event listener yang telah di seleksi
// document.querySelector('').addEventListener('click', (e) => {
//   e.target.removeEventListener
// })