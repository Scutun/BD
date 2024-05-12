//Update user info
function updateTransport(event){
    
    event.preventDefault()

    const updatedTransport = {}
    updatedTransport.vin = document.getElementById('updateVin').value
    if (updatedTransport.vin === "") {
        console.log("Invalid VIN") 
        return
    }
    
    updatedTransport.lifting_capacity = document.getElementById('updateLiftingCap').value
    if (updatedTransport.lifting_capacity === "") {
        console.log("Invalid lifting capacity") 
        return
    } 
    updatedTransport.brand = document.getElementById('updateBrand').value
    if (updatedTransport.brand === "0") {
        console.log("Invalid brand") 
        return
    } 
    updatedTransport.color = document.getElementById('updateColor').value
    if (updatedTransport.color === "0") {
        console.log("Invalid color") 
        return
    } 

    fetch(`http://26.233.112.62:3000/api/transport`, {
        method: "PUT",
        body: JSON.stringify(updatedTransport),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then(clearData => console.log(clearData))
}

const updateBut = document.getElementById('update')
updateBut.onclick = updateTransport