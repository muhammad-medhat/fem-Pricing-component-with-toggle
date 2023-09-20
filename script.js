const toggle = document.getElementById("checkbox");

// const annualPriceNodeList = document.querySelectorAll(".price.annually");
// const monthlyPriceNodeList = document.querySelectorAll(".price.monthlt");

let isAnnual = false;

const hideNodes = (cls) => {
  document.querySelectorAll(cls).forEach((n) => {
    n.style.display = "none";
  });
};
const showNodes = (cls) => {
  document.querySelectorAll(cls).forEach((n) => {
    n.style.display = "block";
  });
};
toggle.addEventListener("change", () => {
  isAnnual = !toggle.checked;
  if (isAnnual) {
    hideNodes(".price.monthly");
    showNodes(".price.annually");
  } else {
    hideNodes(".price.annually");
    showNodes(".price.monthly");
  }
});
