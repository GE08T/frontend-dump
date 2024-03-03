// get data from link via api
const promiseSomething = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
)

//return it on console its gonna return a promises
//this should print pending because response from promise hasn't handled yet
console.log(promiseSomething) 

//this is gonna handle response with then method
// and assign that status promise to console.log()
promiseSomething.then((response) => {
  console.log(`Menerima Response: ${response.status}`)
})

console.log("Memulai Request...") 