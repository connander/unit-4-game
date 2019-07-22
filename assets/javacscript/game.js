var gem1Ran = Math.floor(Math.random()*12) +1;
console.log("gem1 points" + gem1Ran);
var gem2Ran = Math.floor(Math.random()*12) +1;
console.log("gem2 points" + gem2Ran);
var gem3Ran = Math.floor(Math.random()*12) +1;
console.log("gem3 points" + gem3Ran);
var gem4Ran = Math.floor(Math.random()*12) +1;
console.log("gem4 points" + gem4Ran);


var playerScore = 0;

var winNum = Math.floor(Math.random()*120) + 1;

console.log(winNum);
$("#gameNum").text(winNum);

$("#gem1").on("click", addNum1);
$("#gem2").on("click", addNum2);
$("#gem3").on("click", addNum3);
$("#gem4").on("click", addNum4);

function addNum1() {
 
 playerScore = gem1Ran + playerScore;
 $("#totalPoints").text(playerScore);

}
function addNum2() {
 
    playerScore = gem2Ran + playerScore;
    $("#totalPoints").text(playerScore);
   
}
function addNum3() {
 
    playerScore = gem3Ran + playerScore;
    $("#totalPoints").text(playerScore);
   
}
function addNum4() {
    
    playerScore = gem4Ran + playerScore;
    $("#totalPoints").text(playerScore);
   
}



console.log(playerScore);
    if (playerScore === winNum) {
        $("winScreen").text("You Win!");
    }
    else if (playerScore > winNum) {
        $("winScreen").text("You Lose!");
    }
    else {
        $("winScreen").text("Keep Going!");
    }
