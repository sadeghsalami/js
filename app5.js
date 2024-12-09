// event  رویداد

let form = document.querySelector("form"),
  usernameInput = document.querySelector(".username"),
  btnSave = document.querySelector(".btn_save"),
  btnNext = document.querySelector(".btn_next"),
  result = document.querySelector(".result")

btnNext.addEventListener("click", (e) => {
  e.preventDefault();
});

// btnNext.addEventListener("dblclick", getDate);
// btnNext.addEventListener('mouseup' , getDate)
// btnNext.addEventListener('mousedown' , getDate)
// btnNext.addEventListener('mousemove' , getDate)
// btnNext.addEventListener('mouseenter' , getDate)
// btnNext.addEventListener('mouseover' , getDate)
// btnNext.addEventListener('mouseleave' , getDate)
// btnNext.addEventListener('mouseout' , getDate)
// usernameInput.addEventListener('keypress' , getDate)
// usernameInput.addEventListener('keydown' , getDate)
// usernameInput.addEventListener('keyup' , getDate)
// usernameInput.addEventListener('copy' , getDate)
// usernameInput.addEventListener('cut' , getDate)
// usernameInput.addEventListener('paste' , getDate)
// window.addEventListener('resize' , getDate)
// document.addEventListener('DOMContentLoaded' , getDate)
// document.addEventListener("", getDate)
// usernameInput.addEventListener('blur' , getDate)




let msgContainer = document.querySelector('.msg')

eventListernes()
function eventListernes(){
    form.addEventListener('submit' , getNote)
    usernameInput.addEventListener('blur', validateInputs)
}

function getNote(e) {
  e.preventDefault();
  let valueUsername = usernameInput.value
  if( valueUsername !== ''){
    let parag = `
    <div class=''>
        <div><span>Username: ${valueUsername}</span></div>
        <div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
    `
    result.innerHTML += parag
    // usernameInput.value = ''
    form.reset()
    msgContainer.style.transform = 'translate(0px)'
    msgContainer.classList.add('success')
    msgContainer.classList.remove('error')
    msgContainer.textContent = 'Note successfuly saved.'
  }else{

    msgContainer.style.transform = 'translate(0px)'
    msgContainer.classList.add('error')
    msgContainer.classList.remove('success')
    msgContainer.textContent = 'This field mus be fill!'
  }
  setTimeout(()=>{
    msgContainer.style.transform = 'translate(-500px)'
    msgContainer.textContent=''
    msgContainer.className = 'msg'
  },5000)
}

function validateInputs(e){

    if(usernameInput.value === ''){
        usernameInput.classList.add('error')
        usernameInput.classList.remove('success')

    }else{
        usernameInput.classList.add('success')
        usernameInput.classList.remove('error')
    }
}