const apiKey = 'JbAGIaRfUWt61OG53lI2foz0syjthvXsahdW7cgZ'
const apiUrl = 'https://api.nasa.gov/planetary/apod'
const photoContainer = document.getElementById('photos-container')
const loadDataButton= document.getElementById('load-data')
const resetButton = document.getElementById('reset-button')
const datesArray = []


loadDataButton.addEventListener('click', function() {
    fetch(`${apiUrl}?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data))
}) 

