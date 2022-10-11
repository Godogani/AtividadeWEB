const COLETAR_DADOS = () => {
  text = document.getElementById("text").value;
  localStorage.setItem("text", text);
  text_array = [];
  finaltext = "";

  for (i = 0; i < text.length; i++) {
    text_array[i] = text.charAt(i);
    console.log(text_array[i]);
  }
  text_array.sort();
  finaltext = text_array.join("");
  localStorage.setItem("finalText", finaltext);
  window.location.replace("./resultado.html");
};

text = localStorage.getItem("text");
finaltext = localStorage.getItem("finalText");

if (text != null) {
  document.querySelector(
    ".original"
  ).textContent = `Texto sem organizar: ${text}`;
}
if (finaltext != null) {
  document.querySelector(
    ".novo"
  ).textContent = `Texto após organizar: ${finaltext}`;
}
