const listOfCols = document.querySelectorAll('.col');

function setRandomColors() {
  listOfCols.forEach(col => {
    const nameColor = col.querySelector('.name-color');
    const randomColor = chroma.random();
    const lockColor = col.querySelector('i')
    col.style.background = randomColor;
    nameColor.innerText = randomColor;
    setTextColor(nameColor, randomColor);
    setTextColor(lockColor, randomColor);
  })
}

setRandomColors();

function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white';
}

function generateColor() {
  let colorValue = '';
  const hexCodeValues = '0123456789ABCDEF';
  for(let i = 0; i < 6; i++) {
    colorValue += hexCodeValues[Math.floor(Math.random() * hexCodeValues.length)];
  }
  return '#' + colorValue;
}