document.getElementById('checkButton').addEventListener('click', () => {
    const number = parseInt(document.getElementById('numberInput').value);
  
    if (isNaN(number)) {
      document.getElementById('result').textContent = 'Por favor, insira um número válido.';
    } else {
      const isEven = number % 2 === 0;
      document.getElementById('result').textContent = isEven
        ? `${number} é par.`
        : `${number} é ímpar.`;
    }
  });
  