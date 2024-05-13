//Create User
function createTransport(event){
    
    event.preventDefault()

    const newTransport = {}
    newTransport.vin = document.getElementById('vin').value
    
    while(document.getElementsByClassName("warning").length !== 0){
        document.getElementsByClassName("warning")[0].remove()
    }

    if (newTransport.vin === "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid VIN"
        document.getElementById("vin").after(par)
    } 
    newTransport.lifting_capacity = document.getElementById('liftingCap').value
    if (newTransport.lifting_capacity === "" || newTransport.lifting_capacity <= 0) {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid Lifting Capacity"
        document.getElementById("liftingCap").after(par)
    } 
    newTransport.email = document.getElementById('email').value
    if (newTransport.email === "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid EMail"
        document.getElementById("email").after(par)
    } 
    newTransport.brand = document.getElementById('brand').value
    if (newTransport.brand === "0") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid Brand"
        document.getElementById("brand").after(par)
    } 
    newTransport.color = document.getElementById('color').value
    if (newTransport.color === "0") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid Color"
        document.getElementById("color").after(par)
        return
    } 

    fetch(`http://26.233.112.62:3000/api/transport`, {
        method: "POST",
        body: JSON.stringify(newTransport),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(data => {
        if(data.status === 400){
            const p = document.createElement("p")
            p.className = "warning"
            p.innerText = "Transport with this VIN already exist"
            document.getElementsByTagName("form")[0].appendChild(p)
        }
        return data.json()
    })
    .then(clearData => {
        //console.log(clearData)
        document.getElementById('vin').value = ""
        document.getElementById('liftingCap').value = ""
        document.getElementById('email').value = ""
        document.getElementById('brand').value = "0"
        document.getElementById('color').value = "0"
    })
}

const createBut = document.getElementById('create')
createBut.onclick = createTransport