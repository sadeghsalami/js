let number = document.querySelector(".number");
let sub = document.querySelector(".sub");
let frm = document.querySelector(".frm_get_adad");
let btn = document.querySelector(".btn");
let listNum = document.querySelector(".list_num");

eventListeners();
function eventListeners() {
  // document.addEventListener("DOMContentLoaded", getNum);
  frm.addEventListener("submit", getNumbers);
  btn.addEventListener("click", getNum);
}

function getNum() {
  alert(number.value);
}

function getNumbers(e) {
  e.preventDefault();
  let inputVal = number.value;
  if (inputVal % 2 === 0) {
    let zovj = inputVal * 2;
    let li = `
        <li>
            <span>${zovj}</span>
        </li>
    `;

    listNum.innerHTML += li


  } else {
    let fard = inputVal * 3;
    let li = `
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    `;

    listNum.innerHTML += li
  }
}
