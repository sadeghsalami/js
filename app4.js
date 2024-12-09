// function

// rest operator
// spread OP
// function sum( ...c ){
//     console.log('hi ' + ' ' );
//     console.log(c);
// }

// sum('Ali' , 'asadi',5,89,63,'M')

// function sayHello(num) {
//   let res = num * 5
//   return res
// }

// arrow fn
// ES ecma script6

// let sayHello = num => console.log('hi');

// sayHello()





// DOM ====> Document Object Model

// querySelector
// let headingElem = document.querySelector('.title')
// let link1 = document.querySelector('#link1')

// let headingElem = document.querySelectorAll('.title')

// headingElem.forEach(elem => console.log(elem.textContent))



// getElement...
// let headingElem = document.getElementsByClassName('title')
// let link1 = document.getElementById('link1')
// let link1 = document.getElementsByTagName('a')



// let parent = document.querySelector('.parent')
// let title = document.querySelector('.title2')
// // let ch = document.querySelector('#ch')
// // let att = parent.getAttribute('')
// // parent.setAttribute('name' , 'parent_div')
// // ch.setAttribute('checked' , 'true')
// // ch.toggleAttribute('checked',false)
// parent.classList.add('main')
// parent.classList.remove('wrapper')

// parent.className = 'main ddf ghg jhjk qada'

// let contentParent = title.textContent
// let contentParent = title.innerHTML
// let contentParent = title.innerText
// console.log(contentParent);

// title.textContent += 'TITLLLLLLLEEEEE'
// console.log(title.textContent);


// create element 
// let list = document.createElement('li')
// list.className = 'list li_item'
// list.id = 'list'
// list.setAttribute('name' , 'li')
// list.textContent = 'ITEM 1'

// parent.appendChild(list)
// parent.append(list)


// template literal
// back tic
// inter polation
// let counter = 888

let list = `
<ul>
    <li class='list li_item'>ITEM ${counter}</li>
</ul>
` 
// parent.appendChild(list)
// parent.append(list)
parent.innerHTML += list