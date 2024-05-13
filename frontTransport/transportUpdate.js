//Update user info
function updateTransport(event){
    
    event.preventDefault()

    const updatedTransport = {}
    updatedTransport.vin = document.getElementById('updateVin').value
    
    while(document.getElementsByClassName("warning").length !== 0){
        document.getElementsByClassName("warning")[0].remove()
    }

    if (updatedTransport.vin === "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid VIN"
        document.getElementById("updateVin").after(par)
    }
    
    updatedTransport.lifting_capacity = document.getElementById('updateLiftingCap').value
    if (updatedTransport.lifting_capacity === "" && updatedTransport.vin !== "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid Lifting Capacity"
        document.getElementById("updateLiftingCap").after(par)
    } 
    updatedTransport.brand = document.getElementById('updateBrand').value
    if (updatedTransport.brand === "0" && updatedTransport.vin !== "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid Brand"
        document.getElementById("updateBrand").after(par)
    } 
    updatedTransport.color = document.getElementById('updateColor').value
    if (updatedTransport.color === "0" && updatedTransport.vin !== "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid Color"
        document.getElementById("updateColor").after(par)
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