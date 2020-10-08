
function Jokenpo() {
    var userChoice = document.getElementById("escolha");

    var computerChoice = function(){
        var numero = Math.random().toFixed(2);

        if(numero < 0.33){
            return "Pedra";
        }else if(numero < 0.66){
            return "Papel";
        }else{
            return "Tesoura";
        }
    }();

    alert("Escolha do computador: " + computerChoice.toLowerCase());

    computerChoice = computerChoice.toLowerCase();
    alert(function(){
        if((userChoice == "papel" && computerChoice == "pedra") ||
            (userChoice == "tesoura" && computerChoice == "papel")||   
            (userChoice == "pedra" && computerChoice == "tesoura")){
            return "Você venceu ;)";
    }else if((userChoice == "pedra" && computerChoice == "papel")||
        (userChoice == "papel" && computerChoice == "tesoura")||
        (userChoice == "tesoura" && computerChoice == "pedra")){
        return "Você perdeu :(";
    }else{
        return "Empataram :|";
    }
}());

}