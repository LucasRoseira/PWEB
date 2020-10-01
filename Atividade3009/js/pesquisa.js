var quantidade = 0;
var arrayIdade = [];
var totalIdades = 0;

function Enviar() {

	var idade = document.getElementById("idade");
	var sexo = document.getElementById("sexo");
	var opiniao = document.getElementById("opiniao");
	var maiorIdade;
	var menorIdade;
	var media;
	var qtdPessimo;
	var porcentagemPessimoBom;
	var i;

	quantidade++;
	totalIdades += idade.value;

	if(opiniao.value == "pessimo") {
		qtdPessimo++;
	}

	alert('Total Idades: ' + totalIdades);

	arrayIdade.push(idade.value);
	alert('Pesquisa enviada com sucesso!');


	if(quantidade == 3) {

		maiorIdade = Math.max.apply(null, arrayIdade);
		alert('Maior idade: ' + maiorIdade);

		menorIdade = Math.min.apply(null, arrayIdade);
		alert('Menor idade: ' + menorIdade);

		media = Math.round(totalIdades / 3);
		alert('Media Idades: ' + media);

		alert('Quantidade de Péssimo: ' + qtdPessimo);

		window.reload();

	}

}