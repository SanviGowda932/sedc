function bill(){
    var Dosa=parseInt(document.getElementById("Dosa").value)*20;
    var Idli=parseInt(document.getElementById("Idli").value)*15;
    var Meals=parseInt(document.getElementById("Meals").value)*180;
    var Tea=parseInt(document.getElementById("Tea").value)*20;
    var Coffee=parseInt(document.getElementById("Coffee").value)*10;
    var Juice=parseInt(document.getElementById("Juice").value)*60;
    var Gobi=parseInt(document.getElementById("Gobi").value)*65;
    var total =Idli + Tea + Meals + Dosa + Coffee+Juice+Gobi

    var bill = document.getElementById("total").innerHTML = "Yout Total Amount is :"+" "+total;

    
}