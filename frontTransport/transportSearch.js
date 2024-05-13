//Find Transport
function findTransport(event){

    event.preventDefault()

    while(document.getElementsByClassName("warning").length !== 0){
        document.getElementsByClassName("warning")[0].remove()
    }

    const inp = document.getElementById('searchVin')
    const data = inp.value
    fetch(`http://26.233.112.62:3000/api/transport/one/${data}`)
    .then(data => data.json())
    .then(dt => {

        if(dt.length === 0){
            const par = document.createElement("p")
            par.className = "warning"
            par.innerText = "Transport not found"
            document.getElementById("searchVin").after(par)
            return 
        }

        const transportInfo = document.getElementById('transport')

        const vin = document.createElement('td')
        vin.innerText = dt[0].vin

        const liftingCap = document.createElement('td')
        liftingCap.innerText = dt[0].lifting_capacity

        const email = document.createElement('td')
        email.innerText = dt[0].email

        const brand = document.createElement('td')
        brand.innerText = dt[0].brand

        const color = document.createElement('td')
        color.innerText = dt[0].color

        while(transportInfo.hasChildNodes()) transportInfo.removeChild(transportInfo.firstChild)

            transportInfo.appendChild(vin)
            transportInfo.appendChild(liftingCap)
            transportInfo.appendChild(email)
            transportInfo.appendChild(brand)
            transportInfo.appendChild(color)
    })
}

const searchBut = document.getElementById('find')
searchBut.onclick = findTransport

//Find All Transports
function findAllTransports(event){

    event.preventDefault()

    const inp = document.getElementById('searchEmail')
    const data = inp.value
    fetch(`http://26.233.112.62:3000/api/transport/all/${data}`)
    .then(data => data.json())
    .then(dt => {

        if(dt.length === 0){
            const par = document.createElement("p")
            par.className = "warning"
            par.innerText = "Transport not found"
            document.getElementById("searchEmail").after(par)
            return 
        }

        const transportInfo = document.getElementById('transports')
        
        while(transportInfo.childNodes.length !== 2) transportInfo.removeChild(transportInfo.lastChild)

        dt.forEach(element => {
            const tr = document.createElement('tr')

            const vin = document.createElement('td')
            vin.innerText = element.vin

            const liftingCap = document.createElement('td')
            liftingCap.innerText = element.lifting_capacity

            const email = document.createElement('td')
            email.innerText = element.email

            const brand = document.createElement('td')
            brand.innerText = element.brand

            const color = document.createElement('td')
            color.innerText = element.color
            
            tr.appendChild(vin)
            tr.appendChild(liftingCap)
            tr.appendChild(email)
            tr.appendChild(brand)
            tr.appendChild(color)

            transportInfo.appendChild(tr)

            return(element)
        });
        
    })
}

const findBut = document.getElementById('findAll')
findBut.onclick = findAllTransports


//Amount of transport
function amountTransport(event){

    event.preventDefault()

    const inp = document.getElementById('amountEmail')
    const data = inp.value
    fetch(`http://26.233.112.62:3000/api/transport/amount/${data}`)
    .then(data => data.json())
    .then(dt => {

        if(dt.length === 0){
            const par = document.createElement("p")
            par.className = "warning"
            par.innerText = "Transport not found"
            document.getElementById("amountEmail").after(par)
            return
        }
        const transportAmount = document.getElementById('amount')

        const email = document.createElement('td')
        email.innerText = dt[0].mail

        const counter = document.createElement('td')
        counter.innerText = dt[0].counter


        while(transportAmount.hasChildNodes()) transportAmount.removeChild(transportAmount.firstChild)

            transportAmount.appendChild(email)
            transportAmount.appendChild(counter)
    })
}

const countBut = document.getElementById('count')
countBut.onclick = amountTransport