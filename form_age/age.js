let f_name = document.querySelector('.f_name')
let l_name = document.querySelector('.l_name')
let age = document.querySelector('.age')
let register = document.querySelector('.register')
let frm = document.querySelector('.frm_age')




eventListeners();
function eventListeners(){
    frm.addEventListener("submit", getNames);

}

function getNames(e){
    e.preventDefault();
    let inputAge = age.value;
    if (inputAge < 18){
        console.log(inputAge);
    }
    else
    if(inputAge >= 18){
        console.log(inputAge);
    }
}