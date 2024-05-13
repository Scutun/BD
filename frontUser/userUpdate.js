//Update user info
function updateUser(event){
    
    event.preventDefault()

    const updatedUser = {}
    updatedUser.email = document.getElementById('updateEmail').value

    while(document.getElementsByClassName("warning").length !== 0){
        document.getElementsByClassName("warning")[0].remove()
    }

    if (updatedUser.email === "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid email"
        document.getElementById("updateEmail").after(par)
    } 
    
    updatedUser.surname = document.getElementById('updateSurname').value
    if (updatedUser.surname === "" && updatedUser.email !== "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid surname"
        document.getElementById("updateSurname").after(par)
    } 
    updatedUser.first_name = document.getElementById('updateFirstName').value
    if (updatedUser.first_name === "" && updatedUser.email !== "") {
        const par = document.createElement("p")
        par.className = "warning"
        par.innerText = "Invalid name"
        document.getElementById("updateFirstName").after(par)
        return
    } 
    updatedUser.second_name = document.getElementById('updateSecondName').value


    fetch(`http://26.233.112.62:3000/api/user`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then(clearData => console.log(clearData))
}

const updateBut = document.getElementById('update')
updateBut.onclick = updateUser