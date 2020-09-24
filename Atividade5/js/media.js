var notas = [
    parseFloat(prompt("Digite a 1ª nota:")),
    parseFloat(prompt("Digite a 2ª nota:")),
    parseFloat(prompt("Digite a 3ª nota:"))
];

var soma=0;
notas.forEach(function(nota){
    soma += nota;
});

alert("Média: " + soma/notas.length);