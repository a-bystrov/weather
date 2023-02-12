var apiKey = "c23e4763835e732827933c1add3cb369"
var btnEnterLocation = document.querySelector('button')
var main = document.querySelector('.main span')
var temp = document.querySelector('.temp span')
var wind = document.querySelector('.wind span')
var imgWeather = document.querySelector('img')
var error = document.querySelector('.error')

async function getWeather() {
    let location = document.querySelector('input').value
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&lang=ru&units=metric&appid=${apiKey}`
    let response = await fetch(url)
    if (response.ok) {
    let data = await response.json()
    main.textContent = data.weather[0]['main']
    temp.textContent = data.main['temp']+' C°'
    wind.textContent = data.wind['speed']+' mps'
    setImg()
    }
    else {
        error.style.display = 'block'
    }
}

function setImg() {
    if(main.textContent === 'Clouds') {
        imgWeather.src = 'images/cloud.png'
    }
    else if(main.textContent === 'Clear') {
        imgWeather.src = 'images/sun.png'
    }
    else if(main.textContent === 'Rain') {
        imgWeather.src = 'images/rain.png'
    }
    else if(main.textContent === 'Mist') {
        imgWeather.src = 'images/mist.png'
    }
    else if(main.textContent === 'Snow') {
        imgWeather.src = 'images/snow.png'
    }
    else {
        imgWeather.src = 'images/rain.png'
    }
}

btnEnterLocation.addEventListener('click', ()=>{
    error.style.display = 'none'
    getWeather()
})