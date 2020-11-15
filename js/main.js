var arrayRandomNum = [];
var arrayUserNum = [];
var winningNum =[];
var MAXSEC = 5;

while(arrayRandomNum.length < 5){
  var tmpRandomNum = randomNum(1,30);

  if(!arrayRandomNum.includes(tmpRandomNum)){
    arrayRandomNum.push(tmpRandomNum);
  }
}
console.log(arrayRandomNum);

var outputNumArray = document.getElementById("outputNum");

for(var i = 0; i < arrayRandomNum.length; i++){
  outputNumArray.innerHTML += "<li>" + arrayRandomNum[i] + "</li>";
}



var btnTimeout = document.getElementById("startTimeout");



var outputTimeout = document.getElementById("outputTimeout");

btnTimeout.addEventListener("click", function(){

  btnTimeout.style.display = "none";
  var timeleft = MAXSEC;
  var timeout = MAXSEC * 1000;
  outputNumArray.innerHTML = "";

  outputTimeout.innerHTML = "Ti mancano "+MAXSEC+ " secondi";
  var countdown = setInterval(function(){
    timeleft--
    outputTimeout.innerHTML = "Ti mancano "+timeleft+ " secondi";
  },1000)


  setTimeout(function(){
    clearInterval(countdown);
    outputTimeout.innerHTML = "";

    while(arrayUserNum.length < 5){

      var tmpUserNum = parseInt(prompt("Inserisci Numero"));

      if(!arrayUserNum.includes(tmpUserNum)){
        arrayUserNum.push(tmpUserNum);
      }else{
        alert("Numero già inserito");
      }

      if(arrayRandomNum.includes(tmpUserNum)){
        winningNum.push(tmpUserNum);
      }

    }

    console.log(arrayUserNum);
    console.log(winningNum);

    outputTimeout.innerHTML = "Hai indovinato "+winningNum.length+" numeri, e sono: " + winningNum;


  },timeout)


})
