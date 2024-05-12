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


//Find User
function findUser(event){

    event.preventDefault()

    const inp = document.getElementById('searchEmail')
    const data = inp.value
    fetch(`http://26.233.112.62:3000/api/user/${data}`)
    .then(data => data.json())
    .then(dt => {
        const userInfo = document.getElementById('users')

        const email = document.createElement('td')
        email.innerText = dt[0].email

        const pass = document.createElement('td')
        pass.innerText = dt[0].password

        const surname = document.createElement('td')
        surname.innerText = dt[0].surname

        const firstName = document.createElement('td')
        firstName.innerText = dt[0].first_name

        const secondName = document.createElement('td')
        secondName.innerText = dt[0].second_name

        const role = document.createElement('td')
        role.innerText = dt[0].role

        while(userInfo.hasChildNodes()) userInfo.removeChild(userInfo.firstChild)

        userInfo.appendChild(email)
        userInfo.appendChild(pass)
        userInfo.appendChild(surname)
        userInfo.appendChild(firstName)
        userInfo.appendChild(secondName)
        userInfo.appendChild(role)
    })
}

const searchBut = document.getElementById('find')
searchBut.onclick = findUser

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


function deleteUser(event){

    event.preventDefault()

    const deletedUser = document.getElementById('deleteEmail').value

    
}
