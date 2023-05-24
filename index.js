/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById('convert-btn')
const convertInput = document.getElementById('convert-input')
const lengthResults = document.getElementById('length-results')
const volumeResults = document.getElementById('volume-results')
const massResults = document.getElementById('mass-results')

convertInput.addEventListener("input", function() {   
    if (convertInput.value <= 999999) {
        convertLength()
        convertVolume()
        convertMass()
    }  
    if (convertInput.value === "") {
        lengthResults.textContent = ""
        volumeResults.textContent = ""
        massResults.textContent = ""
    }
})

function convertLength() {
    lengthResults.textContent = `${convertInput.value} meters = ${Number(convertInput.value * 3.281).toFixed(3)} feet | ${convertInput.value} feet = ${Number(convertInput.value / 3.281).toFixed(3)} meters`
}
function convertVolume() {
    volumeResults.textContent = `${convertInput.value} liters = ${Number(convertInput.value * 0.264).toFixed(3)} gallons | ${convertInput.value} gallons = ${Number(convertInput.value / 0.264).toFixed(3)} liters`
}
function convertMass() {
    massResults.textContent = `${convertInput.value} kilograms = ${Number(convertInput.value * 2.204).toFixed(3)} pounds | ${convertInput.value} pounds = ${Number(convertInput.value / 2.204).toFixed(3)} pounds`
}