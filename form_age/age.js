let f_name = document.querySelector(".f_name#f_nam");
let l_name = document.querySelector(".l_name#l_nam");
let age = document.querySelector(".age");

let frm = document.querySelector(".frm_age");

let tbl_teen = document.querySelector(".tbl_teen table tbody");
let tbl_adult = document.querySelector(".tbl_adult table tbody");
let msg = document.querySelector(".msg");

eventListeners();
function eventListeners() {
  frm.addEventListener("submit", getNames);
}

function getNames(e) {
  e.preventDefault();
  let fNameValue = f_name.value;
  let lNameValue = l_name.value;
  let ageValue = age.value;

  if (ageValue < 18) {
    msg.textContent = "under 18";

    let table1 = `
            <tr>
                <td class ='table1 tr_inputL_name'>  ${fNameValue} </td>
                <td class ='table1 tr_inputF_name'>  ${lNameValue} </td>
                <td class ='table1 tr_inputAge'>  ${ageValue} </td>
            </tr>
        `;
    tbl_teen.innerHTML += table1;
  } else if (ageValue >= 18) {
    msg.textContent = "up 18";
        let table2 = `
        <tr>
            <td class ='table2 tr_inputL_name'> ${fNameValue} </td>
            <td class ='table2 tr_inputF_name '> ${lNameValue} </td>
            <td class ='table2 tr_inputAge'> ${ageValue} </td>
        </tr>
    `;
    tbl_adult.innerHTML += table2;
  }

  frm.reset()
}
