//Create User
function createUser(event){
    
    event.preventDefault()

    const newUser = {}
    newUser.email = document.getElementById('email').value
    if (newUser.email === "") {
        console.log("Invalid email") 
        return
    } 
    newUser.password = document.getElementById('pass').value
    if (newUser.password === "") {
        console.log("Invalid password") 
        return
    } 
    newUser.surname = document.getElementById('surname').value
    if (newUser.surname === "") {
        console.log("Invalid surname") 
        return
    } 
    newUser.first_name = document.getElementById('firstName').value
    if (newUser.first_name === "") {
        console.log("Invalid name") 
        return
    } 
    newUser.second_name = document.getElementById('secondName').value
    newUser.role = document.getElementById('role').value


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