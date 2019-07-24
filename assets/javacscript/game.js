var gem1Ran = Math.floor(Math.random()*12) +1;
console.log("gem1 points" + gem1Ran);
var gem2Ran = Math.floor(Math.random()*12) +1;
console.log("gem2 points" + gem2Ran);
var gem3Ran = Math.floor(Math.random()*12) +1;
console.log("gem3 points" + gem3Ran);
var gem4Ran = Math.floor(Math.random()*12) +1;
console.log("gem4 points" + gem4Ran);


var playerScore = 0;

var winNum = Math.floor(Math.random()*120) + 19;

window.onload = function gameStart() {
    playerScore = 0;

    $("#gameNum").text(winNum);

    $("#gem1").on("click", function(){
        addNum1();
        winCon();
        console.log(playerScore);
    });
    $("#gem2").on("click", function(){
        addNum2();
        winCon();
        console.log(playerScore);
    });
    $("#gem3").on("click", function(){
        addNum3();
        winCon();
        console.log(playerScore);
    });
    $("#gem4").on("click", function(){
        addNum4();
        winCon();
        console.log(playerScore);
    });

}


function winCon () {                        //when click is called, go ("click", function(){
                                            // win con and add num functions get called here
                                            // so addnum1();
                                            //then if/else statements

    if (playerScore === winNum) {
        $("#winScreen").html("You Win!");                                    
        winReset();

    }
    else if (playerScore > winNum) {
        $("#winScreen").text("You Lose!");
        winReset();
    }
    else {
        $("winScreen").text("Keep Going!");
    }
    
}

function winReset () {
    
    gem1Ran = Math.floor(Math.random()*12) +1;
    gem2Ran = Math.floor(Math.random()*12) +1;
    gem3Ran = Math.floor(Math.random()*12) +1;
    gem4Ran = Math.floor(Math.random()*12) +1;

    winNum = Math.floor(Math.random()*120) + 19;
    $("#gameNum").text(winNum);
    playerScore = 0;
    $("#totalPoints").text(playerScore);


}



function addNum1() {
 
 playerScore = gem1Ran + playerScore;
 $("#totalPoints").text(playerScore);
 winCon();
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


