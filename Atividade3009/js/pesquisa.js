var quantidade = 0;
var arrayIdade = [];
var totalIdades = 0;
var qtdPessimo = 0;
var qtdOtimoBom = 0;
var qtdMulheres = 0;
var qtdHomens = 0;
var porcentagemOtimoBom = 0;

function Enviar() {

	var idade = document.getElementById("idade");
	var sexo = document.querySelector("#sexo");
	var opiniao = document.querySelector('input[name=opiniao]:checked')
	var maiorIdade;
	var menorIdade;
	var media;
	var i;

	quantidade++;
	totalIdades += Number(idade.value);

	if(opiniao.value == "pessimo") {
		qtdPessimo++;
	} else {
		qtdOtimoBom++;
	}


	if(sexo.value == "masculino") {
		qtdHomens++;
	} else {
		qtdMulheres++;
	}


	arrayIdade.push(idade.value);
	alert('Pesquisa enviada com sucesso!');


	if(quantidade == 3) {
		porcentagemOtimoBom = qtdOtimoBom / quantidade * 100;

		maiorIdade = Math.max.apply(null, arrayIdade);
		alert('Maior idade: ' + maiorIdade);

		menorIdade = Math.min.apply(null, arrayIdade);
		alert('Menor idade: ' + menorIdade);

		media = Math.round(totalIdades / 3);

		alert('Media Idades: ' + media);

		alert('Quantidade de Péssimo: ' + qtdPessimo);

		alert('Porcentagem ótimo e bom: ' + porcentagemOtimoBom.toFixed(2) + '%');

		alert('Quantidade de Homens: ' + qtdHomens);

		alert('Quantidade de Mulheres: ' + qtdMulheres);

		window.location.reload();
	}

}