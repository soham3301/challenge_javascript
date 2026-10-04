// \u00B0C

let temperatureInCelcius = prompt(`What's the temperature today?`);

let temperatureInFahrenheit = (temperatureInCelcius * 9) / 5 + 32;

if (temperatureInCelcius < 0) {
  alert(
    `It's freezing. Result in Fahrenheit: ${temperatureInFahrenheit}\u00B0C`,
  );
} else if (temperatureInCelcius >= 0 && temperatureInCelcius <= 15) {
  alert(`It's cold. Result in Fahrenheit: ${temperatureInFahrenheit}\u00B0C`);
} else if (temperatureInCelcius > 15 && temperatureInCelcius <= 25) {
  alert(
    `Much comfortable. Result in Fahrenheit: ${temperatureInFahrenheit}\u00B0C`,
  );
} else if (temperatureInCelcius > 25 && temperatureInCelcius <= 35) {
  alert(
    `It's kinda warm. Result in Fahrenheit: ${temperatureInFahrenheit}\u00B0C`,
  );
} else {
  alert(`It's Hot! Result in Fahrenheit: ${temperatureInFahrenheit}\u00B0C`);
}
