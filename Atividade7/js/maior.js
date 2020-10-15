
function Maior() {
	var num1 = document.getElementById("num1");
	var num2 = document.getElementById("num2");
	var num3 = document.getElementById("num3");

	maiorNumero(num1.value, num2.value, num3.value);

	function maiorNumero(num1, num2, num3) {
		var arrayNumeros = [num1, num2, num3];

		arrayNumeros.sort((a, b) => a - b);

		alert("O maior número é: "+ arrayNumeros[arrayNumeros.length - 1]);
	}

}