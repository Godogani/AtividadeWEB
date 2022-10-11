names = [];
namechanger = [];
document.querySelector("#n1").addEventListener("input", () => {
  return (names[0] = document.querySelector("#n1").value);
});
document.querySelector("#n2").addEventListener("input", () => {
  return (names[1] = document.querySelector("#n2").value);
});
document.querySelector("#n3").addEventListener("input", () => {
  return (names[2] = document.querySelector("#n3").value);
});
document.querySelector("#n4").addEventListener("input", () => {
  return (names[3] = document.querySelector("#n4").value);
});
document.querySelector("#n5").addEventListener("input", () => {
  return (names[4] = document.querySelector("#n5").value);
});

function INVERTER() {
  for (i = 0; i < 5; i++) {
    namechanger[4 - i] = names[i];
  }
  for (i = 0; i < 5; i++) {
    names[i] = namechanger[i];
  }
  document.querySelector("#n1").value = names[4];
  document.querySelector("#n2").value = names[3];
  document.querySelector("#n3").value = names[2];
  document.querySelector("#n4").value = names[1];
  document.querySelector("#n5").value = names[0];
}
