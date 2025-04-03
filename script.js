// const url="fca_live_fmg3PhLA2JXyYvm94wBiFifGieaBqLSwpQlvMpRE";

const dropdowns = document.querySelectorAll(".dropdown select");
const output = document.querySelector(".msg input");
const conversion = document.querySelector(".msg p");
const button = document.querySelector("button");


// conversion.innerText=`${from} to ${to}`;
// 

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

  button.addEventListener("click", (e) => {
    e.preventDefault();
    output.value="45";
  });

  // Last API stops working i will try to implement it with gemini api 
  