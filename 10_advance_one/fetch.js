const fetchData = fetch(  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")


console.log(fetchData);

fetchData.then((Response)=>{
    const resJson = Response.json()
    resJson.then((data)=>{
        // console.log(data);
        console.log(data[0].name);
    })
})

console.log('sending request');