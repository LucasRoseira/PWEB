var Aluno1 = {
  ra: '0030481811515',
  nome: 'Marcia'
}
alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);

Aluno1.ra = '0030481911919';
Aluno1.nome = 'Ruby';
alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);

Aluno1['ra'] = '0030481911010';
Aluno1['nome'] = 'Marcos';
alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);