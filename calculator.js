function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return 'Error';
    return a / b;
}

function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

document.getElementById('add').addEventListener('click', () => {
    const [a, b] = getInputValues();
    document.getElementById('calculation-result').textContent = add(a, b);
});

document.getElementById('subtract').addEventListener('click', () => {
    const [a, b] = getInputValues();
    document.getElementById('calculation-result').textContent = subtract(a, b);
});

document.getElementById('multiply').addEventListener('click', () => {
    const [a, b] = getInputValues();
    document.getElementById('calculation-result').textContent = multiply(a, b);
});

document.getElementById('divide').addEventListener('click', () => {
    const [a, b] = getInputValues();
    document.getElementById('calculation-result').textContent = divide(a, b);
});
