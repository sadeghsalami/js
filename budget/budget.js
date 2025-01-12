let counter1 = document.querySelector('.number1') 
let btn1 = document.querySelector('.submit')
let counter2 = document.querySelector('.number2') 
let counter3 = document.querySelector('.number3') 
let result1 = document.querySelector('.tob')
let result2 = document.querySelector('.tob')
let counter4 = document.querySelector('.number4')
let counter5 = document.querySelector('.number5')
let btn_save = document.querySelector('.save')




eventListeners()
function eventListeners(){
    btn1.addEventListener('click' , get_budget)
    btn2.addEventListener('click' , get_cost)
}
function get_cost(e){
    e.preventDefault();
    let mool = `
            <div><span> cost of amount : ${btn_save.value} </span></div>
    `
    result2.innerHTML=mool
}

function get_budget(e) {
    e.preventDefault();
    counter2.innerHTML = counter1.value
    counter3.innerHTML = counter1.value
    
//     let pool = `
//             <div> <span> total of budget : ${counter1.value} </span> </div>

// `
// result1.innerHTML=pool
// // number2=result;
// console.log(result1);
}






