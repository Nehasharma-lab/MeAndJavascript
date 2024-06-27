const containerEl = document.querySelector(".container")
const carrers = ["Youtuber", "Web Developer" , "Freelancer", "Dancer", "Instructor"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText()
{
characterIndex++;
containerEl.innerHTML = `
<h1>I am  ${carrers[careerIndex].slice(0,1) === "I" ? "an" : "a"} 

${carrers[careerIndex].slice(0,characterIndex)}</h1>
`;

if (characterIndex === carrers[careerIndex].length) {
   careerIndex++ ;
   characterIndex = 0;
}
if (careerIndex === carrers.length){
    careerIndex =0;
}
 setTimeout(updateText, 100);
}