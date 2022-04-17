//variable which the user inputs
var dxiBackColor = "#946c86";
var dxiBoxColor = "	#3c2e48";

//	#182132
//  #1c6d64

//Can these be declared as global variables
//variable declaration for user chat
var dxiUserTextColor;
var dxiUserBorderColor;
//variable declaration for bot chat
var dxiBotTextColor;
var dxiBotBorderColor;

// var qArray = ["What’s the name of my health problem?","Can you explain it to me in a few words?",
// "What do I need to do to get better?","What medicine or treatment do I need to take?"];

var qkeyArray = ["problem","explain","better","medicine"];

var aArray = ["The health issue your having is GBS","It happens when nerves creates it's own commands",
"yoga and reducing stress can reduce it's effect over time","Just physical activity and one tonic is more than enough"];

//All you need to start with is just body tag
function start(){

    //create body and input box 
    dxiCreateMainInterface(dxiBackColor,dxiBoxColor);

    //initialise variables (textcolor,bordercolor)
    dxiUserChatInterface("lightgreen","white");
    dxiBotChatInterface("white","lightgreen");

}

function ansQst(qSplit){
    var check = 0;
    for(let i=0;i<4;i++){
        if(qSplit.includes(qkeyArray[i])){
            setTimeout( function(){ dxiBotChat(aArray[i]); }, 2000);
            check = 1;
        }
    }
    if(check==0){
        setTimeout( function(){ dxiBotChat("Invalid input"); }, 2000);
    }
}

function askQst(){
    var inputBox = document.getElementsByTagName('input');
    var qSplit;
    setTimeout( function(){ 
        dxiUserChat(inputBox[0].value);
        qSplit = inputBox[0].value.split(" ");
        console.log(qSplit);
        ansQst(qSplit);
        inputBox[0].value = "";
    },0);
    //setTimeout( function(){ dxiBotChat(aArray[0]); }, 3000);
}



function testDoctor(){
    //after this dxiUserChat triggered based on the askQuest() function trigger

    // setTimeout( function() { dxiUserChat(qArray[0]); }, 0);
    // setTimeout( function() { dxiBotChat(aArray[0]); }, 3000);

    // setTimeout( function() { dxiUserChat(qArray[1]); }, 6000);
    // setTimeout( function() { dxiBotChat(aArray[1]); }, 9000);

    // setTimeout( function() { dxiUserChat(qArray[2]); }, 12000);
    // setTimeout( function() { dxiBotChat(aArray[2]); }, 15000);

    // setTimeout( function() { dxiUserChat(qArray[3]); }, 18000);
    // setTimeout( function() { dxiBotChat(aArray[3]); }, 21000);

    // setTimeout( function() { dxiUserChat(qArray[4]); }, 24000);
    // setTimeout( function() { dxiBotChat(aArray[4]); }, 27000);

}


