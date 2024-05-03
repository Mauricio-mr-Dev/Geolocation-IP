const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2e4813629fmshadcf18974d1a88cp139074jsnbb4b823b5d16',
        'X-RapidAPI-Host': 'oliver-ip-geolocation.p.rapidapi.com'
    }
};

const fetchApi = (url) => {
   return fetch(`https://oliver-ip-geolocation.p.rapidapi.com/default?ip=${url}&lang=es`,OPTIONS)
        .then(res => res.json())
        .catch(err => console.log(err))      
}


const form = document.querySelector('#form')
const input = document.querySelector('#input')
const btn = document.querySelector('#submit')
const resulst = document.querySelector('#results')

form.addEventListener('submit' , async(e) =>{
    e.preventDefault()
    const {value} = input
    if(!value) return

    btn.setAttribute('disable', '')
    btn.setAttribute('aria-busy', true)
    const ipInfo = await fetchApi(value)

    if (ipInfo){
        resulst.innerHTML = JSON.stringify(ipInfo, null ,2) 
    }

    btn.removeAttribute('disable')
    btn.removeAttribute('aria-busy')

})