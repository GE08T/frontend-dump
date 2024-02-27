const fetchJson = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
)

// we want get response as Json so we use json()
// this is example of callback hell because we nested that promise2 inside a promise1 
// fetchJson.then((response) => {
//   const resultJson = response.json()
//   resultJson.then((data) => {
//     console.log(data[0].image)
//   })
// })

// instead of the code above we want it to be like this
fetchJson
  .then((response) => response.json())
  .then((data) => {
    console.log(`Data Ke 10:  ${data[10].name}`)
  })