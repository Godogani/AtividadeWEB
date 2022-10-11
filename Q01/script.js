const CHECAR_MEDIA = () => {
  nome = prompt("Para começar insira seu nome");
  disciplina = prompt(
    "Agora insira o nome da disciplina que deseja consultar a média"
  );
  localStorage.setItem("nome", nome);
  nota1 = Number(prompt("Insira a primeira nota"));
  nota2 = Number(prompt("Insira a segunda nota"));
  nota3 = Number(prompt("Insira a terceira nota"));

  media = Number((nota1 + nota2 + nota3) / 3).toFixed(2);
  localStorage.setItem("media", media);
  localStorage.setItem("disciplina", disciplina);
  if (media) {
    window.location.replace("./resultado.html");
  }
};

nome = localStorage.getItem("nome");
media = Number(localStorage.getItem("media"));
disciplina = localStorage.getItem("disciplina")

document.getElementById("greetings").textContent = `Olá ${nome}`;

if (media >= 6) {
  document.getElementById(
    "result"
  ).textContent = `Aprovado com média ${media} na disciplia de ${disciplina}`;
} else if (media < 6 && media >= 4) {
  document.getElementById(
    "result"
  ).textContent = `Em recuperação com média ${media} na disciplia de ${disciplina}`;
} else {
  document.getElementById(
    "result"
  ).textContent = `Reprovado com média ${media} na disciplia de ${disciplina}`;
}
