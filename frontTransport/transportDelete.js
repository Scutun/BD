//Delete User
function deleteTransport(event){

    event.preventDefault()

    const deletedTransport = document.getElementById('deleteVin').value

    fetch(`http://26.233.112.62:3000/api/transport/${deletedTransport}`, {
        method: "DELETE",
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then(clearData => console.log(clearData))

}

const deleteBut = document.getElementById('delete')
deleteBut.onclick = deleteTransport
