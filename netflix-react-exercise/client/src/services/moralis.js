const options = {
  method: 'GET',
  headers: { 'Accept': 'application/json', 'X-API-Key': 'B5aql312YfBMhshMJWdKJzOhWn8pS1Nxj3EEei5Tv8l8VeerL19NLOGtMoPorXUG' },
};

fetch('https://deep-index.moralis.io/api/v2/block/1000?chain=sol', options)
  .then((response) => response.json())
  .then((response) => printResult(response))
  .catch((err) => console.error(err))

const printResult = (response) => {
 console.log(response)
}
