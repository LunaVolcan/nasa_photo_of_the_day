const apiKey = 'le5Gjgtiv0mihum0Nt8ie9rpXz733mwNOYBH0cYN'
const apiUrl = 'https://api.nasa.gov/planetary/apod'
const photoContainer = document.getElementById('photos-container')
const loadDataButton = document.getElementById('load-data')
const resetButton = document.getElementById('reset-button')
const datesArray = []


function getData() {
    loadDataButton.addEventListener('click', function () {
        photoContainer.innerHTML = ''
        datesArray.map(date => {

            fetch(`${apiUrl}?api_key=${apiKey}&date=${date}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    displayData(data)
                    resetButton.style.display = 'block';
                })
        })
    })
}

getData()

function displayData(data) {
    let mediaContent
    if (data.media_type === 'video') {
        mediaContent = `
            <video width="560" height="315" controls>
                <source src="${data.url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>`
    } else {
        mediaContent = `<img src="${data.url}" alt="${data.title}">`
    }

    const dataHTML = `
    <div class="nasa-item">
        <h2>${data.title}</h2>
        <div>${mediaContent}</div>
        <p>${data.explanation}</p>
        <p>Date: ${data.date}</p>
        <p>Copyright: ${data.copyright || 'N/A'}</p>
    </div>
    `

    photoContainer.innerHTML += dataHTML
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

function resetPage() {
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', () => {
        location.reload()
    })
}

resetPage()


