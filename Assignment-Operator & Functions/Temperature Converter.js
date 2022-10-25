//You are asked to implement a feature for a weather app. This feature takes the
//temperature in Manila from the servers of PAGASA and converts it from one scale to another.
//Implement 2 functions:
//convertToKelvin(tempCelsius) that converts Celsius to Kelvin
//convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin

function convertCelsiusToKelvin(tempCelsius){
    let tempKelvin=(tempCelsius)+273.15;
    return tempKelvin;
}
function convertFahrenheitToKelvin(tempFahrenheit){
    let tempKelvin=(tempFahrenheit-32)/1.8+273.15;
    return tempKelvin;
}
console.log(convertCelsiusToKelvin(1))
console.log(convertFahrenheitToKelvin(1))