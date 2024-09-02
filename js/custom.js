const apiKey = 'le5Gjgtiv0mihum0Nt8ie9rpXz733mwNOYBH0cYN'
const apiUrl = 'https://api.nasa.gov/planetary/apod'
const photoContainer = document.getElementById('photos-container')
const loadDataButton= document.getElementById('load-data')
const resetButton = document.getElementById('reset-button')
const datesArray = []


function getData() {
    loadDataButton.addEventListener('click', function() {
    datesArray.map(date => {
        
        fetch(`${apiUrl}?api_key=${apiKey}&date=${date}`)
        .then(response => response.json())
        .then(data => {
         console.log(data)
         displayData(data)
        })
    })
 })
}

getData()

function displayData(data) {

const dataHtml = `
<div class="photo-card">
    <h2>${data.title} </h2>
    <img src="${data.url}">
    <p>${data.explanation}</p>
    <p>${data.date}</p>
    <p>${data.copyright} </p>
</div>
`
    photoContainer.innerHTML += dataHtml
}

function getDates() {
    const today = new Date()
   
    const yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)
 
    const dayBeforeYes = new Date(today)
    dayBeforeYes.setDate(today.getDate() - 2)

    const formatDate = (date) => {
        return date.toISOString().split('T')[0]
    }

     datesArray.push(formatDate(today))
    datesArray.push(formatDate(yesterday))
    datesArray.push(formatDate(dayBeforeYes))

    console.log(datesArray)

    console.log("Today:", today);
    console.log("Yesterday:", yesterday);
    console.log("Day Before Yesterday:", dayBeforeYes);
}

getDates()

// function resetPage() {
    
// }



