document.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    
    const result = (height, weight) => {
        return weight / (height / 100) ** 2;
    }
    
    const BMI = result(height, weight).toFixed(2);
    
    let category;
    if (BMI < 18.5) {
        category = 'Underweight';
    } else if (BMI < 25) {
        category = 'Normal weight'; 
    } else if (BMI < 30) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    const message = document.getElementById('message');
    message.innerHTML = `<p>Your BMI is ${BMI} which means You are ${category}</p>`;
});