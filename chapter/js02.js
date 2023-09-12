/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Nikitha
      Date:   6th sept 2023

      Filename: js02.js
 */
      document.addEventListener("DOMContentLoaded", function() {
         // Get references to the input fields and the estimateed  span
         document.getElementById("photoNum").oninput = getEstimate;
         document.getElementById("photoHrs").oninput = getEstimate;
         document.getElementById("makeBook").onchange = getEstimate;
         document.getElementById("photoRights").onchange = getEstimate;
         document.getElementById("photoDist").oninput = getEstimate;
         
         function setupForm() {
           document.getElementById("photoNum").value = 1;
           document.getElementById("photoHrs").value = 2;
           document.getElementById("makeBook").checked = false;
           document.getElementById("photoRights").checked = false;
           document.getElementById("photoDist").value = 0;
           getEstimate();
         }
         
         function getEstimate() {
           const photoNum = parseInt(document.getElementById("photoNum").value);
           const photoHrs = parseInt(document.getElementById("photoHrs").value);
           const makeBook = document.getElementById("makeBook").checked;
           const photoRights = document.getElementById("photoRights").checked;
           const photoDist = parseInt(document.getElementById("photoDist").value);
         
           if (photoNum < 0) {
             document.getElementById("photoNum").value = 0;
           }
           if (photoHrs < 2) {
             document.getElementById("photoHrs").value = 2;
           }
         
           let baseCost = photoNum * photoHrs * 100;
         
           if (makeBook) {
             baseCost += 350;
           }
           if (photoRights) {
             baseCost += 1250;
           }
         
           const travelCost = photoNum * photoDist * 2;
           const totalEstimate = baseCost + travelCost;
          
           document.getElementById("estimate").textContent = "$" + totalEstimate.toFixed(2);
         }
         
         window.onload = setupForm;
         
         
      });

