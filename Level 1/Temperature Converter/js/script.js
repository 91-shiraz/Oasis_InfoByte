function convertTemperature() {
    
    // Get the input value and selected units
    const inputValue = parseFloat(document.getElementById("temperatureInput").value);
    const fromUnit = document.getElementById("fromTemperatureUnit").value;
    const toUnit = document.getElementById("toTemperatureUnit").value;
    const result = document.getElementById("temperatureResult");

    // Perform the conversion
    let convertedTemp;

    if(isNaN(inputValue)){
        result.textContent = "Please Enter a Valid Temperature";
        return;
    }
    else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        convertedTemp = (inputValue * 9/5) + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        convertedTemp = inputValue + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        convertedTemp = (inputValue - 32) * 5/9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        convertedTemp = (inputValue - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        convertedTemp = inputValue - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        convertedTemp = (inputValue - 273.15) * 9/5 + 32;
    } else {
        convertedTemp = inputValue;
    }

    // Display the result
    result.textContent = `Result : ${convertedTemp.toFixed(2)}  °${toUnit}`;
};
