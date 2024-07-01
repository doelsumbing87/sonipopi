function konversiCelciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

const suhuCelcius = 25;
const suhuFahrenheit = konversiCelciusToFahrenheit(suhuCelcius);
console.log(
  `${suhuCelcius} derajat Celcius = ${suhuFahrenheit} derajat Fahrenheit`,
);
