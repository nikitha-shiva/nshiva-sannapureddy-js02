/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Sowmya
      Date:   9th sept 2023

      Filename: project02-03.js
 */
   document.addEventListener("DOMContentLoaded", function() {

      const square = document.getElementById("square");
      const triangle = document.getElementById("triangle");
      const circle = document.getElementById("circle");
      const feedback = document.getElementById("feedback");

      // Function to display the hover message
      function displayHoverMessage(shapeName) {
         feedback.textContent = "You're hovering over the " + shapeName;
      }

      // Shape Event listeners for each shape

      square.addEventListener("mouseenter", function() {
         displayHoverMessage("square");
      });

      triangle.addEventListener("mouseenter", function() {
         displayHoverMessage("triangle");
      });
      //for circle
      circle.addEventListener("mouseenter", function() {
         displayHoverMessage("circle");
      });

      // Clearing the feedback when the mouse goes out of shape
      [square, triangle, circle].forEach(function(shape) {
         shape.addEventListener("mouseleave", function() {
            feedback.textContent = "";
         });
      });
   });
