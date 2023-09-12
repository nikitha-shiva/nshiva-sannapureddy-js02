/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Nikitha
      Date:   8 Sept 2023

      Filename: project02-01.js
 */
   document.addEventListener("DOMContentLoaded", function() {
      const fahrenheitInput = document.getElementById("fValue");
      const celsiusInput = document.getElementById("cValue");

      // Function to convert Fahrenheit to Celsius
      function fahrenheitToCelsius(fahrenheit) {
         return (fahrenheit - 32)/1.8;
      }

      // Function to convert Celsius to Fahrenheit
      function celsiusToFahrenheit(celsius) {
         return (celsius * 1.8) + 32;
      }

      // Event listener for Fahrenheit input
      fahrenheitInput.addEventListener("input", function() {
         const fahrenheitValue = parseFloat(fahrenheitInput.value);
         if (!isNaN(fahrenheitValue)) {
            const celsiusValue = fahrenheitToCelsius(fahrenheitValue);
            celsiusInput.value = celsiusValue.toFixed(2);
         }
      });

      // Event listener for Celsius input
      celsiusInput.addEventListener("input", function() {
         const celsiusValue = parseFloat(celsiusInput.value);
         if (!isNaN(celsiusValue)) {
            const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
         }
      });
   });

