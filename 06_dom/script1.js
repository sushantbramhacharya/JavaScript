// const parent=document.querySelector(".parent");
// console.log(parent.children);//returns HTML Collections
// console.log(Array.from(parent.children));//conversion into array lets us use foreach map filter reduce etc
// console.log(parent.children[1].innerHTML);

// //innerHTML gives all html code inside 
// //innerText gives text values inside the block/content hidden by css cant be accessed
// //textContent gives all text values also which are hided by css display:block

// //using reglar for loop for collections
// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML)
// }

// parent.children[1].style.color="orange";

// //selecting first and last element child
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// //first day using query selector
// const dayOne=document.querySelector(".day");
// console.log(dayOne);
// console.log(dayOne.parentElement);//selecting parent element
// console.log(dayOne.nextElementSibling);//selecting sibling next

// console.log("Nodes: ",parent.childNodes)

//Creating Element using DOM
const div=document.createElement('div');
console.log(div);
div.className="main";
div.id=123;
div.setAttribute("title","generated-title");
div.style.backgroundColor="green"
div.style.padding="12px"
// div.innerText="Created Element"//gets and sets value
const txt = document.createTextNode("Created Element");
div.appendChild(txt)

//Attaching Element
document.body.appendChild(div)