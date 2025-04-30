let f_name = document.querySelector('.f_name #f_nam')
let l_name = document.querySelector('.l_name #l_nam')
let age = document.querySelector('.age')
let register = document.querySelector('.register')
let frm = document.querySelector('.frm_age')
let form = document.querySelector('form')
let table1 = document.querySelector('.table1')
let table2 = document.querySelector('.table2')
let msg = document.querySelector('.msg')




let tab = document.createElement('table')
        console.log(tab);


eventListeners();
function eventListeners(){
    frm.addEventListener("submit", getNames);

}

function getNames(e){
    e.preventDefault();
    let f_names = f_name.value;
    let l_names = l_name.value; 
    let ages = age.value; 



    let inputAge = age.value;
    if (inputAge < 18){
        msg.textContent = "under 18";
        let form = frm.value;
        
        
        let table1 = `
            <tr>
                <span> <td class ='table1 tr_inputAge'>  ${ages} </td> </span>
                <td class ='table1 tr_inputL_name'>  ${l_names} </td>
                <td class ='table1 tr_inputF_name'>  ${f_names} </td>
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
            <td class ='table2 tr_inputAge'> ${age} </td>
            <td class ='table2 tr_inputL_name'> ${l_name} </td>
            <td class ='table2 tr_inputF_name '> ${f_name} </td>
        </tr>
    `
    tableNum.innerHTML += table2


    }
}