//Create User
function createUser(event){
    
    event.preventDefault()

    const newUser = {}
    newUser.email = document.getElementById('email').value

    while(document.getElementsByClassName("warning").length !== 0){
        document.getElementsByClassName("warning")[0].remove()
    }

    if (newUser.email === "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid email"
        document.getElementById("email").after(par)
    } 
    newUser.password = document.getElementById('pass').value
    if (newUser.password === "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid password"
        document.getElementById("pass").after(par)
    } 
    newUser.surname = document.getElementById('surname').value
    if (newUser.surname === "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid surname"
        document.getElementById("surname").after(par)
    } 
    newUser.first_name = document.getElementById('firstName').value
    if (newUser.first_name === "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid name"
        document.getElementById("firstName").after(par)
    } 

    newUser.second_name = document.getElementById('secondName').value

    newUser.role = document.getElementById('role').value
    if (newUser.role === "0") {

        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid role"
        document.getElementById("role").after(par)
        return
    } 


    fetch(`http://26.233.112.62:3000/api/user`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then(clearData => console.log(clearData))
}

const createBut = document.getElementById('create')
createBut.onclick = createUser