const listOfCols = document.querySelectorAll('.col');

function setRandomColors() {
  listOfCols.forEach(col => {
    col.style.background = generateColor();
  })
}

setRandomColors();

function generateColor() {
  let colorValue = '';
  const hexCodeValues = '0123456789ABCDEF';
  for(let i = 0; i < 6; i++) {
    colorValue += hexCodeValues[Math.floor(Math.random() * hexCodeValues.length)];
  }
  return '#' + colorValue;
}