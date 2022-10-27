const listOfCols = document.querySelectorAll('.col');

function setRandomColors() {
  listOfCols.forEach(col => {
    const nameColor = col.querySelector('.name-color');
    const randomColor = chroma.random();
    col.style.background = randomColor;
    nameColor.innerText = randomColor;
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