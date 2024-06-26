const bodyEl = document.querySelector("body") ;

bodyEl.addEventListener( "mousemove", (event) =>{
const xPos = event.offsetX ;
const yPos = event.offsetY ;
const spanEl = document.createElement("span") ;

spanEl.style.left = xPos + "px";
spanEl.style.top = yPos + "px" ;
const size = Math.random()*100;
spanEl.style.width = size + "px" ;
spanEl.style.height = size + "px" ;

bodyEl.appendChild(spanEl) ;
setTimeout( () => 
{
spanEl.remove();
}, 3000);
} ) ;
// const spanEl = document.querySelector("span") ;
// spanEl.addEventListener( "click" , () =>{
// spanEl.style.visibility = "hidden" ;
// console.log(spanEl.style.visibility) ;
// if (spanEl.style.visibility == "hidden")
//     {  
//         spanEl.style.visibility = "visible" ;
//     } 
// } );

// if (spanEl.style.visibility == "hidden")
// {  
//     console.log(spanEl.style.visibility) ;
//     const spanEle = document.querySelector("span") ;
//     spanEle.addEventListener( "click" , () =>{
//     spanEle.style.visibility = "visible" ;
//     });
// }
