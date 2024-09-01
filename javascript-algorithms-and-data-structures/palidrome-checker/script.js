const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

function isPalidrome(str){
return str == str.split('').reverse().join('')
}

const clickButton = (e) => { 
  e.preventDefault();
  result.innerText = "";
  
  const text = input.value;
  const modifiedText = input.value.replace(/[^0-9a-z]/gi, '').toLowerCase();


  if(!text){
    alert("Please input a value");
  }

  if(isPalidrome(modifiedText)){
    result.innerText = `${text} is a palindrome`;    
  } else {
   result.innerText = `${text} is not a palindrome`;
  }
}


button.addEventListener("click", clickButton);
