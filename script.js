// const url="fca_live_fmg3PhLA2JXyYvm94wBiFifGieaBqLSwpQlvMpRE";

const dropdowns = document.querySelectorAll(".dropdown select");

for (let key of dropdowns) {
  for(currCode in countryList){
    const option = document.createElement("option");
    option.value = currCode;
    option.innerText = currCode;
   
    key.add(option);
    }
    key.addEventListener("change", (e)=>{
      updateFlag(e.target);
    });
}
const updateFlag = (element) => {
    let currCode = element.value;
  
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };
