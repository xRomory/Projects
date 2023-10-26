let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let heightStatus = false, weightStatus = false;

    if (height === '' || isNaN(height) || (height <= 0)) {
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        heightStatus = true;
    }

    if (weight === '' || isNaN (weight) || (weight <= 0)) {
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weightStatus = true;
    }

    if (heightStatus && weightStatus) {
        const bmi = (weight / (height * height)).toFixed(2);

        if (bmi < 18.5) {
            result.innerHTML = 'Underweight: ' + bmi + ' kg/m²';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML = 'Normal Weight: ' + bmi + ' kg/m²';
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            result.innerHTML = 'Overweight: ' + bmi + ' kg/m²';
        } else {
            result.innerHTML = 'Obese: ' + bmi + ' kg/m²';
        }
    } else {
        alert('You entered an invalid input');
        result.innerHTML = '';
    }
});