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
	} if(opiniao.value == "regular"){
		
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

	//QUANTIDADE PEQUENA PARA TESTE, ATIVIDADE PEDE COM 45
	if(quantidade == 3) {
		porcentagemOtimoBom = qtdOtimoBom / quantidade * 100;

		maiorIdade = Math.max.apply(null, arrayIdade);

		menorIdade = Math.min.apply(null, arrayIdade);

		media = Math.round(totalIdades / 3);

		alert('Maior idade: ' + maiorIdade + 
		'\nMenor idade: ' + menorIdade +
		'\nMedia Idades: ' + media +
		'\nQuantidade de Péssimo: ' + qtdPessimo +
		'\nPorcentagem ótimo e bom: ' + porcentagemOtimoBom.toFixed(2) + '%' +
		'\nQuantidade de Homens: ' + qtdHomens +
		'\nQuantidade de Mulheres: ' + qtdMulheres);

		window.location.reload();
	}

}