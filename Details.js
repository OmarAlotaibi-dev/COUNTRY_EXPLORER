function getDecodedParam(key) {
  const params = new URLSearchParams(window.location.search);
  const value = params.get(key);
  return value ? decodeURIComponent(value) : "";
}

const name = getDecodedParam("name");
const flag = getDecodedParam("flag");
const population = getDecodedParam("population");
const region = getDecodedParam("region");
const subregion = getDecodedParam("subregion");
const capital = getDecodedParam("capital");
const currencies = getDecodedParam("currencies");
const languages = getDecodedParam("languages");

document.getElementById("detail-name").textContent = name;
document.getElementById("detail-flag").src = flag;
const populationNum = Number(population);
document.getElementById("detail-population").textContent =`Population: ${populationNum.toLocaleString()}`;
document.getElementById("detail-region").textContent = `Region: ${region}`;
document.getElementById("detail-subregion").textContent = `Subregion: ${subregion}`;
document.getElementById("detail-capital").textContent = `Capital: ${capital}`;
document.getElementById("detail-currencies").textContent = `Currencies: ${currencies}`;
document.getElementById("detail-languages").textContent = `Languages: ${languages}`;


function backButtonHandler() {
  window.location.href = "index.html";
}
document.getElementById("backbtn").addEventListener("click", backButtonHandler);




