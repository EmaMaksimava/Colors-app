const listOfCols = document.querySelectorAll('.col');

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.code === 'Space') {
    setRandomColors();
  }
})

document.addEventListener('click', (event) => {
  console.log(event.target.dataset);
  const type = event.target.dataset.type;

  if(type === 'lock') {
    const node = event.target.tagName.toLowerCase() === 'i'
    ? event.target
    : event.target.children[0];

    node.classList.toggle('fa-lock');
    node.classList.toggle('fa-lock-open');
  } else if(type === 'copy') {
    copyToClickboard(event.target.textContent);
  }
})

function setRandomColors(isInitial) {
  const colors = isInitial ? getColorsFromHash() : [];
  listOfCols.forEach((col, index) => {
    const isLocked = col.querySelector('i').classList.contains('fa-lock');
    const nameColor = col.querySelector('.name-color');

    const lockColor = col.querySelector('i');

    if(isLocked) {
      colors.push(nameColor.textContent);
      return
    }

    const randomColor = isInitial
    ? colors[index]
      ? colors[index]
      : chroma.random()
    : chroma.random();

    if(!isInitial){
      colors.push(randomColor);
    }


    col.style.background = randomColor;
    nameColor.innerText = randomColor;
    setTextColor(nameColor, randomColor);
    setTextColor(lockColor, randomColor);
  })

  updateColors(colors);
}

setRandomColors(true);

function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white';
}

function copyToClickboard(text) {
  return navigator.clipboard.writeText(text);
}

function generateColor() {
  let colorValue = '';
  const hexCodeValues = '0123456789ABCDEF';
  for(let i = 0; i < 6; i++) {
    colorValue += hexCodeValues[Math.floor(Math.random() * hexCodeValues.length)];
  }
  return '#' + colorValue;
}

function updateColors(colors = []) {
  document.location.hash = colors.map((col) => {
    return col.toString().substring(1)
  })
  .join('-');
}

function getColorsFromHash() {
  if (document.location.hash.length > 1){
    return document.location.hash.substring(1).split('-').map(color => '#' + color);
  }
  return [];
}