var box = document.querySelector('.box');
// var newDiv = document.createElement('div');
// newDiv.className = 'newDiv'
// box.appendChild (newDiv);

// ******************
// var text = '<div class="newDiv"></div>'
// box.innerHTML = text;
// ******************4

createTable();
var symbol = 'O';
var boxes = document.querySelectorAll ('.xo');
var lines = [
  [boxes[0],boxes[1],boxes[2]],
  [boxes[3],boxes[4],boxes[5]],
  [boxes[6],boxes[7],boxes[8]],
  [boxes[0],boxes[3],boxes[6]],
  [boxes[1],boxes[4],boxes[7]],
  [boxes[2],boxes[5],boxes[8]],
  [boxes[0],boxes[4],boxes[8]],
  [boxes[2],boxes[4],boxes[6]]
];
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', insertSymbol)
}

function createTable() {
  var text = '';
  for (var i = 0; i < 9; i++) {
    text += '<div class="xo"></div>'
  }
  box.innerHTML = text;
}
function insertSymbol() {
  if (this.innerHTML == '') {
    if (symbol == 'O') {
      symbol = 'X'
    } else {
      symbol = 'O'
    }
    this.innerHTML=symbol;
    checkLines();
  }
}
function checkLines() {
  for (var i =0; i <lines.length; i++) {
    var line = lines[i];
    if (line[0].innerHTML == line[1].innerHTML && line[0].innerHTML == line[2].innerHTML && line[0].innerHTML !== '') {
      line[0].style.background='tomato';
      line[1].style.background='tomato';
      line[2].style.background='tomato';
      alert('Kraj igre!');
    }
  }
}
