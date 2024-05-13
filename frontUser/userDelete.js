//Delete User
function deleteUser(event){

    event.preventDefault()

    const deletedUser = document.getElementById('deleteEmail').value

    fetch(`http://26.233.112.62:3000/api/user/${deletedUser}`, {
        method: "DELETE",
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then(clearData => console.log(clearData))



}

const deleteBut = document.getElementById('delete')
deleteBut.onclick = deleteUser
