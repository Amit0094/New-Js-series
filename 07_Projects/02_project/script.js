const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = ((weight / height ** 2) * 10000).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span> <br> <span>Under Weight</span>`;
    }
    if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>${bmi}</span> <br> <span>Normal Range</span>`;
    }
    if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi}</span> <br> <span>Over Weight</span>`;
    }
  }
});
