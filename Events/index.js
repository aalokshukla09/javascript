const element = document.getElementById('first');

// function handleClick() {
//     element.textContent = 'Hii Raj!';
// }

// element.onclick = function handleClick(){
//     element.style.backgroundColor="pink";
// }

// element.onclick = function handleClick(){
//     element.textContent = "I am the best";
// }

// -> this will override the previous onclick event

// element.addEventListener('click',()=>{
//     element.textContent="I am the best";
// });

// element.addEventListener('click',()=>{
//     element.style.backgroundColor="red";
// });

// -> this will not override the previous events

const parent = document.getElementById("parent");


function handleClick(e){
   e.target.textContent = "I am Clicked";
   // parent.removeEventListener('click',handleClick);
}

parent.addEventListener('click',handleClick)


// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = "I am Clicked";
//     })
// }

// Event Bubbling -> when we click on child the event also triggers on parent
// Event Capturing -> when we click on parent the event also triggers on child

// capture phase -> capturing the event from top to bottom
// target phase -> target element
// bubbling phase -> bubbling the event from bottom to top

// when capture phase is true -> event capturing
// when capture phase is false -> event bubbling

// capture phase on hai: Top se down aaoge: Us time pe event ko trigger kar diya jaayega
// capture phase off hai: Event hai usko down to up(Bubbling phase bolte hai, tab trigger kiya jaayega) -> Default behaviour hai

