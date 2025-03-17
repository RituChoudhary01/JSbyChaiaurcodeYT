const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from reloading the page

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please provide a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please provide a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); // BMI Calculation

    // Determine the BMI category
    let category;
    if (bmi < 18.6) {
      category = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal Range";
    } else {
      category = "Overweight";
    }

    // Display the result
    results.innerHTML = `
      <div>Your BMI is: <strong>${bmi}</strong></div>
      <div>You are in the <strong>${category}</strong> category.</div>
    `;
  }
});

// Reset the form and results when needed
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', function () {
  form.reset(); // Clear all form fields
  const results = document.querySelector('#results');
  results.innerHTML = ''; // Clear the results area
});