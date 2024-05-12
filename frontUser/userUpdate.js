//Update user info
function updateUser(event){
    
    event.preventDefault()

    const updatedUser = {}
    updatedUser.email = document.getElementById('updateEmail').value
    
    updatedUser.surname = document.getElementById('updateSurname').value
    if (updatedUser.surname === "") {
        console.log("Invalid surname") 
        return
    } 
    updatedUser.first_name = document.getElementById('updateFirstName').value
    if (updatedUser.first_name === "") {
        console.log("Invalid name") 
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