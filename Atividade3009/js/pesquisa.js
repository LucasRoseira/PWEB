var quantidade = 0;
var arrayIdade = [];

function Enviar() {

	var idade = document.getElementById("idade");
	var sexo = document.getElementById("sexo");
	var opiniao = document.getElementById("opiniao");

	var maiorIdade;
	var i;

	quantidade++;

	arrayIdade.push(idade.value);


	if(quantidade == 3) {

		maiorIdade = Math.max.apply(null, arrayIdade);
		return alert('Maior idade: ' + maiorIdade);
	}


}