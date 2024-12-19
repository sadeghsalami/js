let total_val_bdg = document.querySelector(".total_val_bdg");
let left_val_bdg = document.querySelector(".left_val_bdg");
let frm_get_exp = document.querySelector(".frm_get_exp");
let exp_desc = document.querySelector(".frm_get_exp #desc");
let exp_val = document.querySelector(".frm_get_exp #val");
let list_exp = document.querySelector(".list_exp");
let msg = document.querySelector(".msg");
let btnSaveExp = document.querySelector('.btnSaveExp')

let leftBdg = 0;
let percent50;
let percent25;

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", getBudget);
  frm_get_exp.addEventListener("submit", getExpense);
}

function getBudget() {
  let budget = prompt("Please Enter Your Budget: ");
  if (!budget || budget === "" || budget === "0" || budget === null) {
    window.location.reload();
  } else {
    total_val_bdg.innerHTML = budget;
    left_val_bdg.innerHTML = budget;
    leftBdg = budget;
    percent50 = (leftBdg * 50) / 100;
    percent25 = (leftBdg * 25) / 100;
  }
}

function getExpense(e) {
  e.preventDefault();
  let decsExp = exp_desc.value;
  let valExp = exp_val.value;

  let li = `
        <li>
            <span>${decsExp}</span>
            <span>${valExp}</span>
        </li>
    `;

  console.log(valExp);
  console.log(leftBdg);
  if (+valExp <= +leftBdg) {
    leftBdg = leftBdg - valExp;

    if (leftBdg < percent50) {
      msg.classList.add("error");
      msg.classList.remove("warning");
      msg.textContent = "Your left budget is less from 50%";
    }
    if (leftBdg < percent25) {
      msg.classList.add("warning");
      msg.classList.remove("error");
      msg.textContent = "Your left budget is less from 25%";
    }
    if (leftBdg === 0) {
        msg.classList.add("error");
        msg.classList.remove("warning");
        msg.textContent = "Your left budget is 0 !";
        btnSaveExp.disabled = true
    }
    left_val_bdg.innerHTML = leftBdg;

    list_exp.innerHTML += li;
  } else {
    alert("Balance not enuogh");
  }
}