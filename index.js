const emptyString = '  ';
const boardData = Array(9).fill(emptyString);
const players = {
  1: 'x',
  2: 'o',
};
let currentPlayer = players[1];
let positions = currentPlayer
let winnerPlace = ''


function drawBoard(positions) {
  console.log(`
    ${positions[0]} | ${positions[1]} | ${positions[2]}
    -----------
    ${positions[3]} | ${positions[4]} | ${positions[5]}
    -----------
    ${positions[6]} | ${positions[7]} | ${positions[8]}
  `);
}

function showTutorial() {
  console.log(`
  ### Escolha a posiçao que deseja jogar baseado no tabuleiro abaixo ###

     0 | 1 | 2
    -----------
     3 | 4 | 5
    -----------
     6 | 7 | 8

  ######################################################################
  `);
}

function isEmpty(position) {
  return boardData[position] === emptyString;
}

function changePlayer() {
  if (currentPlayer === players[1]) {
    currentPlayer = players[2];
  } else {
    currentPlayer = players[1];
  }
}

function setPlayerMovement(position) {
  if (isEmpty(position)) {
    boardData[position] = currentPlayer;
    changePlayer();
  } else {
    console.log(`A posição ${position} já foi usada`);
  }
}

/*function winnerCheck(position) {
  if (check(position)) { boardData[position] = winGame1;
    console.log(`o ${currentPlayer} ganhou!`);
  } else {
    console.log(`DEU VELHA!`)
  }
}*/
function changeWinner(positions) {
  winner = positions;
  winnerPlace = winner;
} 

function checkSequence(p1, p2, p3) {
  let mesmo = false;

  if (p1 !== emptyString && p1 === p2 && p2 === p3) {
      mesmo = true;
  }

  return mesmo;
}

function winnerCheck() {
  let p0 = positions[0];
  let p1 = positions[1];
  let p2 = positions[2];
  let p3 = positions[3];
  let p4 = positions[4];
  let p5 = positions[5];
  let p6 = positions[6];
  let p7 = positions[7];
  let p8 = positions[8];

  if (checkSequence(p0, p1, p2)) {
  changeWinner(p0);
  return;
  }

  if (checkSequence(p3, p4, p5)) {
  changeWinner(p3);
  return;
  }

  if (checkSequence(p6, p7, p8)) {
  changeWinner(p6);
  return;
  }

  if (checkSequence(p0, p3, p6)) {
  changeWinner(p0);
  return;
  }

  if (checkSequence(p1, p4, p7)) {
  changeWinner(p1);
 return;

  }

  if (checkSequence(p2, p5, p8)) {
  changeWinner(p2);
  return;
  }

  if (checkSequence(p0, p4, p8)) {
  changeWinner(p0);
  console.log (`parabéns ${p0} você ganhou!`);
  }

  if (checkSequence(p2, p4, p6)) {
  changeWinner(p2);
  console.log (`parabéns ${p2} você ganhou!`);

  } else {
  console.log(`DEU VELHA`);
  }

}


/*function restart() {
  winner = null;
  winnerplace = ' ';

  for (var i = 1; i <= 9; i++) {
    var places = currentPlayer(i);
  
}
changePlayer();

}*/

showTutorial();
setPlayerMovement(1);
setPlayerMovement(8);
setPlayerMovement(2);
setPlayerMovement(3);
setPlayerMovement(4);
setPlayerMovement(7);
setPlayerMovement(6);
setPlayerMovement(0);
setPlayerMovement(5);
winnerCheck();
drawBoard(boardData);

