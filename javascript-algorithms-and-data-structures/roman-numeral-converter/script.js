const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");


function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

const handleClick = (e) => {
  e.preventDefault();
  output.innerText = "";

  if(input.value === ""){
    output.innerText = "Please enter a valid number";
  } else if(parseInt(input.value) < 0){
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (parseInt(input.value) >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    const result =  romanize(input.value);
    output.innerText = result;

  }
}


convertBtn.addEventListener("click", handleClick);