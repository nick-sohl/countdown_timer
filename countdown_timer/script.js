 const daysEl = document.getElementById('days')
 const hoursEl = document.getElementById('hours')
 const minsEl = document.getElementById('mins')
 const secondsEl = document.getElementById('seconds')
 
 const newYears = '1 Jan 2024'

function countDown() {
    const newYearsDate = new Date(newYears)
    const now = new Date()

    const distance = (newYearsDate - now) / 1000

    const days = Math.floor(distance / 3600 / 24)
    const hours = Math.floor(distance / 3600) % 24
    const mins = Math.floor(distance / 60) % 60
    const seconds = Math.floor(distance) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

countDown()

setInterval(countDown, 1000)