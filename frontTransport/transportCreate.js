//Create User
function createTransport(event){
    
    event.preventDefault()

    const newTransport = {}
    newTransport.vin = document.getElementById('vin').value
    if (newTransport.vin === "") {
        console.log("Invalid VIN") 
        return
    } 
    newTransport.lifting_capacity = document.getElementById('liftingCap').value
    if (newTransport.lifting_capacity === "0") {
        console.log("Invalid Lifting Capacity") 
        return
    } 
    newTransport.email = document.getElementById('email').value
    if (newTransport.email === "") {
        console.log("Invalid email") 
        return
    } 
    newTransport.brand = document.getElementById('brand').value
    if (newTransport.brand === "0") {
        console.log("Invalid brand") 
        return
    } 
    newTransport.color = document.getElementById('color').value
    if (newTransport.color === "0") {
        console.log("Invalid color") 
        return
    } 
    console.log(newTransport)

    fetch(`http://26.233.112.62:3000/api/transport`, {
        method: "POST",
        body: JSON.stringify(newTransport),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then(clearData => console.log(clearData))
}

const createBut = document.getElementById('create')
createBut.onclick = createTransport