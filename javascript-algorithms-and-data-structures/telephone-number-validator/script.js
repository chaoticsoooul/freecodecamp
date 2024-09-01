const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const regex1 = /^[1]?\s?\d{3}(-|\s)?\d{3}(-|\s)?\d{4}$/;
const regex2 = /^[1]?\s?(\()\d{3}(\))(-|\s)?\d{3}(-|\s)?\d{4}$/;

const check = () => {
    result.innerText = "";
    
  if(input.value === ""){
    alert("Please provide a phone number");
  } else {
    result.style.visibility = "visible";
    if(regex1.test(input.value) || regex2.test(input.value)){
      result.innerText = `Valid US number: ${input.value}`;} else {
      result.innerText = `Invalid US number: ${input.value}`
    }
  }
};

const clear = () => {
  input.value = "";
  result.innerText = "";
  result.style.visibility = "hidden";
};

checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear);