// Selector
let startStopTimer = document.querySelector('#startStopButton')
let resetTimer = document.querySelector('#resetButton')

// variables Timer 
let second = 0  
let minute = 0  
let hour = 0  

// variables Leading
let leadSecond = 0
let leadMinute = 0
let leadHour = 0

// variable interval
let timeInterval = null
let timeStatus = "started"

let stopWatch = () => {
  second++
  if (second / 60 == 1) {
    second = 0
    minute++

    if (minute / 60 == 1) {
      minute = 0
      hour++
    }
  }

  second < 10 ? leadSecond = "0" + second : leadSecond = second 
  minute < 10 ? leadMinute = "0" + minute : leadMinute = minute 
  hour < 10 ? leadHour = "0" + hour : leadHour = hour 

  let timer = document.getElementById('timer').innerText = leadHour +':'+ leadMinute +':'+ leadSecond  
}

startStopTimer.addEventListener('click', () => {
  if (timeStatus  === "stopped") {
    timeInterval = window.setInterval(stopWatch, 1000)
    document.getElementById("startStopButton").innerHTML = `<ion-icon name="pause" id="pause"></ion-icon>`
    timeStatus = "started"
  } else {
    window.clearInterval(timeInterval)
    document.getElementById("startStopButton").innerHTML = `<ion-icon name="caret-forward-outline" id="play"></ion-icon>`
    timeStatus = "stopped"
  }
})

resetTimer.addEventListener('click', () => {
  window.clearInterval(timeInterval)
  second = 0
  minute = 0
  hour = 0
  document.getElementById("timer").innerText = "00:00:00"
  document.getElementById("startStopButton").innerHTML = `<ion-icon name="caret-forward-outline" id="play"></ion-icon>`
})