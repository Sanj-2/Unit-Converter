/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

btnEl.addEventListener("click",function() {
    if (inputEl.value === "") return
    const inputNum = Number(inputEl.value)
    const convertedLengthFeet = (3.281 * inputNum).toFixed(3)
    const convertedLengthMeters = (inputNum / 3.281).toFixed(3)

    const convertedVolumeGallons = (0.264 * inputNum).toFixed(3)
    const convertedVolumeLiters = (inputNum / 0.264).toFixed(3)

    const convertedMassPounds = (2.204* inputNum).toFixed(3)
    const convertedMassKilo = (inputNum / 2.204).toFixed(3)
    lengthEl.textContent = `${inputNum} meters = ${convertedLengthFeet} feet | ${inputNum} feet = ${convertedLengthMeters} meters`
    volumeEl.textContent = `${inputNum} liters = ${convertedVolumeGallons} gallons | ${inputNum} gallons = ${convertedVolumeLiters} liters`
    massEl.textContent = `${inputNum} kilos = ${convertedMassPounds} pounds | ${inputNum} pounds = ${convertedMassKilo} kilos`
})


