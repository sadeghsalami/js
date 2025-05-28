let rahni  = document.querySelector(".rahn#rahn");
let ejarei = document.querySelector(".ejare#ejare");

let frm = document.querySelector(".frm_commision");

let btn_rahn = document.querySelector(".cmp_rhn");
let btn_ejare = document.querySelector(".cmp_ejr");

let msg = document.querySelector(".msg")
let per_rahn = document.querySelector(".rahniValue");
let per_ejare = document.querySelector(".");

eventListeners();
function eventListeners(){
    btn_rahn.addEventListener("submit", getRahn);
    btn_ejare.addEventListener("submit", getEjare);
}

function getRahn (e) {
    e.preventDefault();
    let rahniValue = rahni.value;
    

    if (rahniValue > 1 && rahniValue * 3 /100){
        msg.textContent = "RAHN :";
        <p> ${per_rahn} </p>
        per_rahn.innerHTML += rahniValue;
    }
}
function getEjare (e){
    e.preventDefault();
    let ejareiValue = ejarei.value;
    
    if(ejareiValue > 1 && ejareiValue * 100 / 3){
        msg.textContent = "EJARE  :";

    }
}