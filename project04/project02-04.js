/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Sowmya
      Date:   10 sept 2023

      Filename: project02-04.js
 */
 

// Function to display a numeric value as a text string in the format $##.## 

function formatCurrency(value) {
   return "$" + value.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function() {
   const checkboxes = document.querySelectorAll("input[type=checkbox]");
   const foodTotal = document.getElementById("foodTotal");
   const foodTax = document.getElementById("foodTax");
   const totalBill = document.getElementById("totalBill");

   // calculate and update the total cost
   function updateTotal() {
      let totalCost = 0;

      checkboxes.forEach(function(checkbox) {
         if (checkbox.checked) {
            totalCost += parseFloat(checkbox.value);
         }
      });

      const tax = totalCost * 0.0703; // 7.03% tax
      const total = totalCost + tax;

      foodTotal.textContent = formatCurrency(totalCost);
      foodTax.textContent = formatCurrency(tax);
      totalBill.textContent = formatCurrency(total);
   }

   // Add event listeners to checkboxes
   checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", updateTotal);
   });
});

