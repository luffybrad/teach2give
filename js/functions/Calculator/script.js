document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
    let currentValue = '';
    let operator = '';
    let previousValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;

            if (value === 'clear') {
                currentValue = '';
                operator = '';
                previousValue = '';
                display.value = '';
            }
            else if (value === 'backspace') {
                currentValue = currentValue.slice(0, -1);
                display.value = currentValue;
            }
            else if (value === '=') {
                if (previousValue && operator && currentValue) {
                    currentValue = calculate(previousValue, operator, currentValue);
                    operator = '';
                    previousValue = '';
                    display.value = currentValue;
                }
            }
            else if (['+', '-', '*', '/', '%'].includes(value)) {
                if (currentValue) {
                    if (previousValue && operator) {
                        previousValue = calculate(previousValue, operator, currentValue);
                        display.value = previousValue;
                    } else {
                        previousValue = currentValue;
                    }
                    operator = value;
                    currentValue = '';
                }
            }
            else {
                currentValue += value;
                display.value = currentValue;
            }
        });
    });

    function calculate(a, operator, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return b !== 0 ? (a / b).toString() : 'Error';
            case '%':
                return (a % b).toString();
            default:
                return b.toString();
        }
    }
}); 