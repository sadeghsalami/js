let counter = document.querySelector('.numbers') 
let btn = document.querySelector('.submit')
let result = document.querySelector('.tob')


eventListeners()
function eventListeners(){
    btn.addEventListener('click' , get_budget)
}


function get_budget(e) {
    e.preventDefault();
    
    let pool = `
            <div> <span> total of budget : ${counter.value} </span> </div>

`
result.innerHTML=pool
}






