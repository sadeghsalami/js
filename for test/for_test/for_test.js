let get_numbers = document.querySelector(".get_number");
let msg = document.querySelector(".msg");
let number = document.querySelector(".number");
let even = document.querySelector(".even");
let odd = document.querySelector(".odd");
let btn_get = document.querySelector(".btn_get");


eventListeners();
function eventListeners(){
    btn_get.addEventListener( 'click' , get_numberic);
}

function get_numberic(){
    let numerical = prompt("enter number :");
    console.log(numerical);
    if (numerical % 2 == 0 ){
        //window.location.reload();
        msg.textContent = " your number is even";
        even.innerHTML+=numerical + ' - ';
    }
    else
    if( numerical % 3 == 0 ){
        //window.location.reload();
        msg.textContent = " your number is odd";
        odd.innerHTML+=numerical;
        
    }
}
