var boxes = document.querySelectorAll(".box");
var turns = 1;

let player1Symbol = "";
let player1Choice = ['','','','','','','','','']; // [0,1,2,"",4,"","",""]
let player2Symbol = "";
let player2Choice = ['','','','','','','','',''];

const round = document.getElementById('turns');

round.innerHTML = turns;


// Alerts user when box has already been occupied //
function occupyError(){
	alert("This box is already occupied. Please pick another !")
}

// onclick event to see which sign will the user pick; "X" or "O" //
// Remaining option will be assigned to computer for the rest of the game //

 function pickSign(){

	sign1.onclick = function(event){
		event.preventDefault();
		if (player1Symbol == "" && player2Symbol == ""){
			player1Symbol = sign1.innerHTML;
			console.log("This is Player 1's symbol: ", player1Symbol);
		}
		if (player1Symbol != "" && player2Symbol == ""){
			player2Symbol = sign2.innerHTML;
			console.log("This is Player 2's symbol: ", player2Symbol);
		}
	}

	sign2.onclick = function(event){
		event.preventDefault();
		if (player1Symbol == "" && player2Symbol == ""){
			player1Symbol = sign2.innerHTML;
			console.log("This is Player 1's symbol: ", player1Symbol);
		}
		if (player1Symbol != "" && player2Symbol == ""){
			player2Symbol = sign1.innerHTML;
			console.log("This is Player 2's symbol: ", player2Symbol);
		}
	}
}

function checkWin(playersChoice, turns){

	var emptyArray = [];

	var possibleCombination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]


	if (playersChoice.slice(0, 3).join("") == possibleCombination[0].join("")){
		if (boxes[0].innerHTML == player1Symbol){
			alert("Player 1 is the winner !")
			return;
		}else{
			alert("Player 2 is the winner !")
			return;
		}
	}
	if (playersChoice.slice(3, 6).join("") == possibleCombination[1].join("")){
		if (boxes[3].innerHTML == player1Symbol){
			alert("Player 1 is the winner !")
			return;
		}else{
			alert("Player 2 is the winner !")
			return;
		}
	}
	if (playersChoice.slice(6, 9).join("") == possibleCombination[2].join("")){
		if (boxes[6].innerHTML == player1Symbol){
			alert("Player 1 is the winner !")
			return;
		}else{
			alert("Player 2 is the winner !")
			return;
		}
	}

	emptyArray.push(playersChoice[0])
	emptyArray.push(playersChoice[3])
	emptyArray.push(playersChoice[6])
	if (emptyArray.join("") == possibleCombination[3].join("")){
		if (boxes[0].innerHTML == player1Symbol){
			alert("Player 1 is the winner !")
			return;
		}else{
			alert("Player 2 is the winner !")
			return;
		}
	}else{
		emptyArray = [];
	}
	emptyArray.push(playersChoice[1])
	emptyArray.push(playersChoice[4])
	emptyArray.push(playersChoice[7])
	if (emptyArray.join("") == possibleCombination[4].join("")){
		if (boxes[1].innerHTML == player1Symbol){
			alert("Player 1 is the winner !")
			return;
		}else{
			alert("Player 2 is the winner !")
			return;
		}
	}else{
		emptyArray = [];
	}
	emptyArray.push(playersChoice[2])
	emptyArray.push(playersChoice[5])
	emptyArray.push(playersChoice[8])
	if (emptyArray.join("") == possibleCombination[5].join("")){
		if (boxes[2].innerHTML = player1Symbol){
			alert("Player 1 is the winner !")
			return;
		}else{
			alert("Player 2 is the winner !")
			return;
		}
	}else{
		emptyArray = [];
	}
	emptyArray.push(playersChoice[0])
	emptyArray.push(playersChoice[4])
	emptyArray.push(playersChoice[8])
	if (emptyArray.join("") == possibleCombination[6].join("")){
		if (boxes[0].innerHTML == player1Symbol){
			alert("Player 1 is the winner !")
			return;
		}else{
			alert("Player 2 is the winner !")
			return;
		}
	}else{
		emptyArray = [];
	}
	emptyArray.push(playersChoice[2])
	emptyArray.push(playersChoice[4])
	emptyArray.push(playersChoice[6])
	if (emptyArray.join("") == possibleCombination[7].join("")){
		if (boxes[2].innerHTML == player1Symbol){
			alert("Player 1 is the winner !")
			return;
		}else{
			alert("Player 2 is the winner eeee!")
			return;
		}
	}else{
		emptyArray = [];
	}
	if (turns == 10){
		alert("It is a draw");
		return;
	}
	
}



pickSign();

for (let i = 0; i < boxes.length; i++){
	
	boxes[i].onclick = function() {
		if (player1Symbol == "" || player2Symbol == ""){
			window.alert("Please select your symbol first!")
			return;
		}
		if (boxes[i].innerHTML != ""){
			occupyError();
			return;
		}
		// Player 1 starts here //
		if (turns % 2 != 0){
			boxes[i].innerHTML = player1Symbol;
			turns++;
			round.innerHTML = turns;
			player1Choice[i] = i;
			console.log(turns);
			console.log("Player 1's selected boxes: ", player1Choice);
			checkWin(player1Choice, turns);
		}
		// Player 2 starts here //
		else{
			boxes[i].innerHTML = player2Symbol;
			turns++;
			round.innerHTML = turns;
			player2Choice[i] = i;
			console.log(turns);
			console.log("Player 2's selected boxes: ", player2Choice)
			checkWin(player2Choice, turns);
		}
		
	}
}
























