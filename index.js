/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numberEl = document.getElementById("number-el")
const buttonEl = document.getElementById("button-el")

const lengthTextEl = document.getElementById("length-text-el")
const volumeTextEl = document.getElementById("volume-text-el")
const massTextEl = document.getElementById("mass-text-el")

const kilosEl = document.getElementById("kilos-el")

function convert() {
    let numValue = numberEl.value;
    
    let meters = (numValue / 3.281).toFixed(2)
    let feet = (numValue * 3.281).toFixed(2)
    
    let liters = (numValue / 0.264).toFixed(2)
    let gallons = (numValue * 0.264).toFixed(2)
    
    let kilograms = (numValue / 2.204).toFixed(2)
    let pounds = (numValue * 2.204).toFixed(2)
    
    let lengthText = `${numValue} meters = ${feet} feet | 
        ${numValue} feet = ${meters} meters`
    let volumeText = `${numValue} liters = ${gallons} gallons | 
        ${numValue} gallons = ${liters} liters`
    let massText = `${numValue} kilos = ${pounds} pounds | 
        ${numValue} pounds = ${kilograms} kilos`
    
    lengthTextEl.innerHTML = lengthText
    volumeTextEl.innerHTML = volumeText
    massTextEl.innerHTML = massText
}

buttonEl.addEventListener("click", () => {
    convert()
})

numberEl.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        convert()
    }
})