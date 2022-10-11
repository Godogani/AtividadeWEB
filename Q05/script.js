ESCREVER = () => {
  date = document.getElementById("date").value;
  fulldate = date.split("-");

  switch (fulldate[1]) {
    case "01":
      document.getElementById(
        "result"
      ).textContent = `A data selecionada foi: ${fulldate[2]} de Janeiro de ${fulldate[0]}`;
      break;
    case "02":
      document.getElementById(
        "result"
      ).textContent = `A data selecionada foi: ${fulldate[2]} de Fevereiro de ${fulldate[0]}`;
      break;
    case "03":
      document.getElementById(
        "result"
      ).textContent = `A data selecionada foi: ${fulldate[2]} de Março de ${fulldate[0]}`;
      break;
    case "04":
      document.getElementById(
        "result"
      ).textContent = `A data selecionada foi: ${fulldate[2]} de Abril de ${fulldate[0]}`;
      break;
    case "05":
      document.getElementById(
        "result"
      ).textContent = `A data selecionada foi: ${fulldate[2]} de Maio de ${fulldate[0]}`;
      break;
    case "06":
      document.getElementById(
        "result"
      ).textContent = `A data selecionada foi: ${fulldate[2]} de Junho de ${fulldate[0]}`;
      break;
    case "07":
      document.getElementById(
        "result"
      ).textContent = `A data selecionada foi: ${fulldate[2]} de Julho de ${fulldate[0]}`;
      break;
    case "08":
      document.getElementById(
        "result"
      ).textContent = `A data selecionada foi: ${fulldate[2]} de Agosto de ${fulldate[0]}`;
      break;
    case "09":
      document.getElementById(
        "result"
      ).textContent = `A data selecionada foi: ${fulldate[2]} de Setembro de ${fulldate[0]}`;
      break;
    case "10":
      document.getElementById(
        "result"
      ).textContent = `A data selecionada foi: ${fulldate[2]} de Outubro de ${fulldate[0]}`;
      break;
    case "11":
      document.getElementById(
        "result"
      ).textContent = `A data selecionada foi: ${fulldate[2]} de Novembro de ${fulldate[0]}`;
      break;
    case "12":
      document.getElementById(
        "result"
      ).textContent = `A data selecionada foi: ${fulldate[2]} de Dezembro de ${fulldate[0]}`;
      break;
  }
};
