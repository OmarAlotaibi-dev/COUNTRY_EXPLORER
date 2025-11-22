



//Each {...} represents one full country object.
// we only give the js how to read the data.js file then it will do it itself
 //now render function this shows the countries in the web page, update the page after filter
 // showmore, refresh result after searching, adding click event to each card 

//const { createElement } = require("react");

 //It is the “boss” that controls everything on screen.
  let displayCount = 12; 
  let currentList = data;
 function renderCountries(list) {
  const container = document.getElementById("country-cards-container");
   container.innerHTML=""; 
    const max = Math.min(displayCount, list.length);
  for (let i = 0 ; i< max;i++){
const country = list[i];
const officialName = country.name.official
const capitalName = country.capital
const regionName = country.region
const populationNumber = country.population
const flag = country.flags.png





const article = document.createElement("article");
article.className = "country-card";
const image = document.createElement("img");
image.src = flag;
image.alt = country.name.common + " flag";
const h2 = document.createElement("h2");
h2.textContent = officialName;
h2.className= "officialName";


const populationP = document.createElement("p");
populationP.className = "populationNumber";
populationP.textContent= populationNumber;

const capitalP = document.createElement("p");
capitalP.className= "capitalName";
capitalP.textContent= capitalName;

const regionP = document.createElement("p");
regionP.textContent = regionName;
regionP.className= "regionName";
  article.appendChild(image);
  article.appendChild(h2);
  article.appendChild(capitalP);
  article.appendChild(regionP);
  article.appendChild(populationP);
  article.addEventListener("click", function () {
      countryCardHandler(country);
    });
  container.appendChild(article);

}
}

document.addEventListener("DOMContentLoaded", () => {
  renderCountries(currentList);   
});

function filterData(){
const searchInput = document.getElementById("searchInput").value.trim();
const regionSelect = document.getElementById("regionSelect").value.trim();
const populationInput = document.getElementById("populationInput").value.trim();

  // 1. Validation
// Region: allow "All Regions" (means no region filter).


if(populationInput >1500000000){
alert("Please enter valid population Number ");
return;
} 

const populationNumber = populationInput === "" ? null : Number(populationInput);
  // 2. Building  filtered list
  const filtered = data.filter(country => {
    const officialName = country.name.official || "";
    const commonName   = country.name.common || "";
    const capitalName = country.capital?.[0] || "";
    const matchSearchInput =
      officialName.toLowerCase().includes(searchInput.toLowerCase()) ||
      commonName.toLowerCase().includes(searchInput.toLowerCase()) ||
      capitalName.toLowerCase().includes(searchInput.toLowerCase());

    const matchRegion =
      regionSelect === "All Regions" || country.region === regionSelect;
    const matchPopulation =
      populationNumber === null || populationNumber === null || country.population >= populationNumber;
    return matchSearchInput && matchRegion && matchPopulation;
 
  });
      if(filtered.length ==0){
        const container = document.getElementById("country-cards-container");
         container.innerHTML="<p>No country found matching the search criteria.</p>";
        return;
     }
       renderCountries(filtered);
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchInput").addEventListener("input", filterData);
  document.getElementById("regionSelect").addEventListener("change", filterData);
  document.getElementById("populationInput").addEventListener("input", filterData);


});

function showMoreHandler(){

displayCount += 10; //  displaycount = displaycount+ 10; 
if(displayCount>=currentList.length){
 document.getElementById("ShowMoreBtn").style.display="none"; 
}
renderCountries(currentList); 
}
document.getElementById("ShowMoreBtn").addEventListener("click",showMoreHandler ); // listenter always out 
// of the function 


function getFormattedNames(array){
 let names = []; //1) Empty list 
 for ( i=0;i<array.length;i++){
names.push(array[i].name); // if we read this from right to left it means 
// take the . name from arr[i] and add it to names using push method 
 }
return names.join(",");
}

function countryCardHandler(country ){
  let queryString  = 
  "?name="+encodeURIComponent( country.name.official)+
  "&flag="+encodeURIComponent(country.flags.svg)+
  "&population="+country.population+
  "&region="+ country.region+
  "&subregion="+encodeURIComponent(country.subregion)+
   "&capital="+encodeURIComponent(country.capital)+
 "&currencies="+encodeURIComponent(getFormattedNames(country.currencies))+ // used the previos function 
"&languages="+encodeURIComponent(getFormattedNames(country.languages));
window.location.href = "Details.html" + queryString;
}

    










