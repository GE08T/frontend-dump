const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
)

// this method is use to combine and modify a bunch of promises 
// if any of fetch is have trouble while fetching the catch will run that condition 
// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for(const response of responses) {
//       console.log(`${response.url}: ${response.status}`)
//     }
//   })
//   .catch((error) => {
//     console.log(`Gagal menerima respon : ${error}`)
//   })

// and next is any, any is when you want a set of promises but don't care which one 
// this is gonna return a single fetch data from all that fetch data 
Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for(const response of responses) {
      console.log(`${response.url} : ${response.status}`)
    }
  })
  .catch((error) => {
    console.log(`Gagal menerima respon : ${error}`)
  })