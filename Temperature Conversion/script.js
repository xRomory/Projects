let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')

let btn = document.querySelector('.button button')

//Rounds the given number to two decimal places.
function roundNumber(number) {
    return Math.round(number * 100) / 100
}


//Celsius to Fahrenheit
celsiusInput.addEventListener('input', function() {
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp * (9/5)) + 32

    fahrenheitInput.value = roundNumber(fTemp)
})

//Fahrenheit to Celsius
fahrenheitInput.addEventListener('input', function() {
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)

    celsiusInput.value = roundNumber(cTemp)
})

btn.addEventListener('click', () => {
    celsiusInput.value = ''
    fahrenheitInput.value = ''
})