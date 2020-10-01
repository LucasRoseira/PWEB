var quantidade = 0;
var arrayIdade = [];
var totalIdades = 0;

function Enviar() {

	var idade = document.getElementById("idade");
	var sexo = document.getElementById("sexo");
	var opiniao = document.querySelector('input[name=opniao]:checked')
	var maiorIdade;
	var menorIdade;
	var media;
	var qtdPessimo;
	var porcentagemOtimoBom;
	var qtdMulheres;
	var qtdHomens;
	var i;

	quantidade++;
	totalIdades += idade.value;

	if(opiniao == "pessimo") {
		qtdPessimo++;
	} else {
		porcentagemOtimoBom++;
	}


	if(sexo == "masculino") {
		qtdHomens++;
	} else {
		qtdMulheres++;
	}


	arrayIdade.push(idade.value);
	alert('Pesquisa enviada com sucesso!');


	if(quantidade == 3) {
		porcentagemOtimoBom /= quantidade;

		maiorIdade = Math.max.apply(null, arrayIdade);
		alert('Maior idade: ' + maiorIdade);

		menorIdade = Math.min.apply(null, arrayIdade);
		alert('Menor idade: ' + menorIdade);

		media = Math.round(totalIdades / 3);
		alert('Media Idades: ' + media);

		alert('Quantidade de Péssimo: ' + qtdPessimo);

		alert('Porcentagem ótimo e bom: ' + porcentagemOtimoBom) + '%';

		alert('Quantidade de Homens: ' + qtdHomens);

		alert('Quantidade de Mulheres: ' + qtdMulheres);

		window.reload();

	}

}