const countries = ["CR", "GT", "SV", "VE"];

const select = document.querySelector("#country");
const input = document.querySelector("#string");

select.addEventListener("change", () => {
  const country = select.value;
  input.value = `El string es: ${country}`;
});