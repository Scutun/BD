//Amount of transport
function amountTransport(event){

    event.preventDefault()

    const inp = document.getElementById('searchEmail')
    const data = inp.value
    fetch(`http://26.233.112.62:3000/transport/amount/${data}`)
    .then(data => data.json())
    .then(dt => {

        if(dt.length === 0){
            console.log("Transport not found")
            return
        }
        const transportAmount = document.getElementById('amount')

        const email = document.createElement('td')
        email.innerText = dt[0].email

        const counter = document.createElement('td')
        counter.innerText = dt[0].counter


        while(transportAmount.hasChildNodes()) transportAmount.removeChild(transportAmount.firstChild)

            transportAmount.appendChild(email)
            transportAmount.appendChild(liftingCap)
    })
}

const searchBut = document.getElementById('count')
searchBut.onclick = amountTransport