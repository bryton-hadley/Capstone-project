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
    <img src=${resort.picture} alt='resort image'/>
    <p>${resort.name}<p>
    <p>${resort.discription}<p>
    <p>${resort.price}<p>
    <section>
    
        <button onclick="updateResort(${resort.id}, 'like')">Like</button>
        Likes: ${resort.likes}
        <button onclick="updateResort(${resort.id}, 'dislike')">Dislike</button>
        <button onclick="deleteResort(${resort.id})">Delete Ski Resort</button>
    
    </section>
    
    <section id="add-comment">
        <input type="text"  id="commentInput(${resort.id})" placeholder="Add a Comment!"
        <button id="addCommentBtn" onclick="addComment(${resort.id})">Post</button>    
    </section>
    
    
    <br></br>
    <br></br>
    
    
    `
    viewResorts.appendChild(resortCard)
    
}

//setting up the comment card
const createCommentCard = (comment) => {

    const commentCard = document.createElement('section')
    commentCard.classList.add('add-comment')

    commentCard.innerHTML = `
    <section id="commentRow">

        <label for=${comment.id}>
            <input onclick="" 
        </label>
    
    </section>


    `
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
//seting up the function to get comments 
const getAllComments = () => {

    axios.get(`${baseUrl}/getComment`)
    .then((res) => {
        res.data
    })
}

postButton.addEventListener('submit', addResort)
getAllResorts()