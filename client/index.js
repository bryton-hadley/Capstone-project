//settting up baseUrl 
const baseUrl = 'http://localhost:1317'

//setting up selector for the displayResorts
const viewResorts = document.querySelector('#displayResorts')

//setting up selector for the bsubmit button
const postButton = document.querySelector('#postResort')


//set up axios request to get ski resorts array
//loop over that array
//Create Ski resort cards for each item in the array 

//setting the commment button to an empty string 
let addCommentBtn = ''

//setting function to get all restorts 
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
    
    <img src=${resort.picture} alt='resort image'class="resort-img"/>
    <p id="resort-name">${resort.name}<p>
    <p id="resort-discription">${resort.discription}<p>
    <p id="resort-price">${resort.price}<p>
    

    <section id="btn-container">
        <button onclick="updateResort(${resort.id}, 'like')">Like</button>
        Likes: ${resort.likes}
        <button onclick="updateResort(${resort.id}, 'dislike')">Dislike</button>
        <br></br>
        <button id="deleteBtn" onclick="deleteResort(${resort.id})">Delete Resort</button>
    
    </section>
    <br></br>
    <br></br>
    
    
    `
    viewResorts.appendChild(resortCard)
    
}


//seting up the function to update the resort card
const updateResort = (id, type) => {
    axios.put(`${baseUrl}/updateLikes/${id}`, {type})
    
    .then((res) => {
        viewResorts.innerHTML = ''
        displayResorts(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

//settiing up the add function
const addResort = (event) => {
    event.preventDefault()
    let nameInput = document.querySelector('#nameInput')
    let imageInput = document.querySelector('#imageInput')
    let priceInput = document.querySelector('#priceInput')
    let discriptionInput = document.querySelector('#discriptionInput')
    
    let newResort = {
        name: nameInput.value,
        picture: imageInput.value,
        price: priceInput.value,
        discription: discriptionInput.value
        
    }
    
    axios.post(`${baseUrl}/addResort`, newResort)
    .then((res) => {
        viewResorts.innerHTML = ''
        
        nameInput.value = ''
        imageInput.value = ''
        priceInput.value = ''
        discriptionInput.value = ''
        displayResorts(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
    
    
}

//setting up delete function 
const deleteResort = (id) => {
    
    axios.delete(`${baseUrl}/deleteResort/${id}`)
    
    .then((res) => {
        viewResorts.innerHTML = ''
        displayResorts(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}


postButton.addEventListener('submit', addResort)
getAllResorts()