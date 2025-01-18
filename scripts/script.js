const userPrompt = () => {
  const userInput = prompt(`Enter Fahrenheit temperature value : `);

  return Number(userInput);
};

const convertToCelsius = () => {
  const FahrenheitValue = userPrompt();

  const celsiusTemp = (FahrenheitValue - 32) * (5 / 9);
  console.log();

  return Math.floor(celsiusTemp);
};

const describeTemperature = () => {
  const celsiusValue = convertToCelsius();
  let message = ``;
  if (celsiusValue < 32) {
    message = `Today Temperature is ${celsiusValue} a very cold day!`;
  } else if (celsiusValue < 64) {
    message = `Today Temperature is ${celsiusValue} a cold day!`;
  } else if (celsiusValue < 86) {
    message = `Today Temperature is ${celsiusValue} a warm day!`;
  } else if (celsiusValue < 100) {
    message = `Today Temperature is ${celsiusValue} a hot day!`;
  } else if (celsiusValue >= 100) {
    message = `Today Temperature is ${celsiusValue} a very hot day!`;
  } else {
    alert("Check inputs something went wrong!");
  }
  return message;
};

const finalWeatherApp = describeTemperature();

alert(finalWeatherApp);
