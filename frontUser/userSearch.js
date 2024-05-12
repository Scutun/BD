//Find User
function findUser(event){

    event.preventDefault()

    const inp = document.getElementById('searchEmail')
    const data = inp.value
    fetch(`http://26.233.112.62:3000/api/user/${data}`)
    .then(data => data.json())
    .then(dt => { 

        if(dt.length === 0){
            console.log("User not found")
            return
        }

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