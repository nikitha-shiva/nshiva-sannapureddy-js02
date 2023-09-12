/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Nikitha
      Date:   8 sept 2023

      Filename: project02-02.js
 */
      document.addEventListener("DOMContentLoaded", function() {
         const submitButton = document.getElementById("submit");
         const nameInput = document.getElementById("name");
         const emailInput = document.getElementById("email");
         const phoneInput = document.getElementById("phone");
   
         submitButton.addEventListener("click", function() {
            if (nameInput.value === "" || emailInput.value === "" || phoneInput.value === "") {
               alert("Please fill in all the details.");
            } else {
               alert("Thank you!");
            }
         });
      });
   
