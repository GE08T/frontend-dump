const fetchData = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
)

// first we are check if response ok then return json of response if its not we throw an error
// second we display the first product name inside console.log
// third we catch an error if its failed to fetch or in that .then is failed 
// this is helping when the api is unavailable due to certain condition
fetchData
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    return response.json()
  })
  .then((data) => {console.log(data[0].name)})
  .catch((error) => {
    console.log(`Tidak bisa mendapatkan produk ini dikarenakan ${error}`)
  })