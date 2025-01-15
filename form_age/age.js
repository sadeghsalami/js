let f_name = document.querySelector('.f_name #f_nam')
let l_name = document.querySelector('.l_name #l_nam')
let age = document.querySelector('.age')
let register = document.querySelector('.register')
let frm = document.querySelector('.frm_age')
let table1 = document.querySelector('.table1')
let table2 = document.querySelector('.table2')
let tableNum = document.querySelector('.tableNum')
let msg = document.querySelector('.msg')


eventListeners();
function eventListeners(){
    frm.addEventListener("submit", getNames);

}

function getNames(e){
    e.preventDefault();
    let inputAge = age.value;
    if (inputAge < 18){
        msg.textContent = "under 18";
        let form = frm.value;
        let tableNum
        let table1 = `
            <tr>
                <td class ='table1 tr_inputAge'>  ${tableNum} </td>
                <td class ='table1 tr_inputAge'>  ${tableNum} </td>
                <td class ='table1 tr_inputAge'>  ${tableNum} </td>
            </tr>
        `
        form.innerHTML += table1


    }
    else
    if(inputAge >= 18){
        msg.textContent = "up 18";
        let tableNum
        let table2 = `
        <tr>
            <td class ='table2 tr_inputAge'> ${tableNum} </td>
            <td class ='table2 tr_inputAge'> ${tableNum} </td>
            <td class ='table2 tr_inputAge'> ${tableNum} </td>
        </tr>
    `
    tableNum.innerHTML += table2


    }
}