let price = 19.5;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

const cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");











let values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]

let text = ""
let indexes = [];
let state = "";



const calculateChange = (change) => {
  let showValue = true;
  let sum = 0
  for(let i = 0; i < cid.length; i++){
    sum += cid[i][1];
    
     
  }
  sum = sum.toFixed(4);
  console.log(sum)
  if(sum === change){
    state = "CLOSED";
  }
 
  for(let i = values.length - 1; i >= 0; i--){
    
 
    if(values[i] > change && cid[i][1] != 0){
      state = "OPEN";
    } else {
      if(cid[i][1] >= change){
        let num = Math.floor(change / values[i]);
        change -= num*values[i]
        change = change.toFixed(4);
          if(cid[i][1] != 0){text += ` ${cid[i][0]}: $${num*values[i]}` }
        indexes.push(i);



      } else {
        change -= cid[i][1]
        change = change.toFixed(4);
        if(cid[i][1] != 0){text += ` ${cid[i][0]}: $${cid[i][1]}` }
        indexes.push(i);
      }
    }

  }  
  
    if(change > 0){
      state = "INSUFFICIENT_FUNDS";
      showValue = false;
    } 
    

  console.log(indexes)
  changeDue.textContent = `Status: ${state}`
  if(showValue){
    changeDue.textContent += text;
  }
}


const cashRegister = () => {

  text = "";
  indexes = [];
  changeDue.textContent = "";
  let change = cash.value - price;
  change = change.toFixed(4)

  if (cash.value == price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
      alert("No change due - customer paid with exact cash");
      
    } else if(cash.value < price){

      alert("Customer does not have enough money to purchase the item");
      
    } else {
      calculateChange(change);
    } 
}

purchaseBtn.addEventListener("click", cashRegister)