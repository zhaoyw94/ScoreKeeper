
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var firstH1 = document.getElementById("firstH1");
var secondH1 = document.getElementById("secondH1");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click" , function(){

 if (!gameOver) {
 	p1Score++;
 	if (p1Score===winningScore) {
 		firstH1.classList.add("winner");
 		gameOver = true;
 		
 	}
 	console.log(p1Score);
 }
 
firstH1.textContent = p1Score;
});

p2Button.addEventListener("click" , function(){
 if (!gameOver) {
 	p2Score++;
 	if (p2Score===winningScore) {
 		secondH1.classList.add("winner"); 		
 		gameOver = true;
 		
 	}
 
 console.log("p2Score");


}
 secondH1.textContent = p2Score; 


});

resetButton.addEventListener("click" , function(){
reset();
	

});

function reset(){
	p1Score = 0;
	p2Score = 0;
	firstH1.textContent = 0;
	secondH1.textContent = 0;
	firstH1.classList.remove("winner");
	secondH1.classList.remove("winner");
	gameOver = false; 
}

numInput.addEventListener("click" , function(){
winningScoreDisplay.textContent = numInput.value;
winningScore = Number(numInput.value);

reset();


});