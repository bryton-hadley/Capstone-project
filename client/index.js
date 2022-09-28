//settting up baseUrl 
const baseUrl = 'http://localhost:1317'

//setting up selector for the displayResorts
const viewResorts = document.querySelector('#displayResorts')

//set up axios request to get ski resorts array
//loop over that array
//Create Ski resort cards for each item in the array 
const getAllResorts = () => {
    
    axios.get(`${baseUrl}/getResorts`)
    
    .then((res) => {
        displayResorts(res.data)
        console.log(res.body)
    })
    .catch((err) => {
        console.log(err)
    })
}
//setting up the function for displayResorts
const displayResorts = (arr) =>{
    
    for(let i = 0; i < arr.length; i++){
        
        createResortCard(arr[i])
        
    }
}

//creating html element add some inner htlm and then appened it to view resorts
const createResortCard = (resort) => {
    
    const resortCard = document.createElement('section')
    resortCard.classList.add('resort-card')

    resortCard.innerHTML = `
    <img src=${resort.picture} alt='resort image'/>
    <p>${resort.name}<p>
    <p>${resort.discription}<p>
    <p>${resort.price}<p>
    <section>
        <button>Like</button>
        Popularity: ${resort}
        <button>Dislike</button>
    </section>

    <button>Delete Ski Resort</button>

    <br></br>
    <br></br>


    `
    viewResorts.appendChild(resortCard)

}

getAllResorts()