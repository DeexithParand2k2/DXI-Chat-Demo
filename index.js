import {
    dxiUserTextColor,dxiUserBorderColor,dxiBotTextColor,dxiBotBorderColor,
    dxiCreateMainInterface,dxiCreateInputBox,dxiUserChatInterface,dxiBotChatInterface,
    dxiBotChat,dxiUserChat
} from "./library.js"
//variable which the user inputs
var dxiBackColor = "#182132";
var dxiBoxColor = "	#3c2e48";

// #946c86;
// #3c2e48;

//	#182132
//  #1c6d64

//Can these be declared as global variables
//variable declaration for user chat

//var dxiUserTextColor;
//var dxiUserBorderColor;

//variable declaration for bot chat

//var dxiBotTextColor;
//var dxiBotBorderColor;

// var qArray = ["What’s the name of my health problem?","Can you explain it to me in a few words?",
// "What do I need to do to get better?","What medicine or treatment do I need to take?"];

//very important
window.addEventListener('load', start);

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
            break;
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


var inputBox = document.getElementsByTagName('input');
document.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        askQst();
    }
},true);




