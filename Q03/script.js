document.querySelector("#n1").addEventListener("input", () => {
  return (n1 = Number(document.querySelector("#n1").value));
});
document.querySelector("#n2").addEventListener("input", () => {
  return (n2 = Number(document.querySelector("#n2").value));
});
function CALCULAR() {
  localStorage.setItem("n1", n1);
  localStorage.setItem("n2", n2);

  const MDC = (a, b) => {
    if (a < b) {
      return MDC(b, a);
    }
    if (b == 0) {
      return localStorage.setItem("mdc", a);
    }
    return MDC(b, a % b);
  };

  MDC(n1, n2);

  window.location.replace("./resultado.html");
}
