const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");

startBtn.onclick = () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
}
exitBtn.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
}

continueBtn.onclick = () => {
  quizSection.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add('active');
  showQuestion(0);
}


let quetionCount=0;
const nextbtn=document.querySelector(".next-btn")
nextbtn.onclick=()=>{
  quetionCount++;
  showQuestion(quetionCount);
}









// getting the question from the array

function showQuestion(index){
  const questionText= document.querySelector(".question-text");
  questionText.textContent=`${questions[index].numb}. ${questions[index].question}`;

  let optionTag=`<div class="option"><span>${questions[index].options[0]}</span></div>
  <div class="option"><span>${questions[index].options[1]}</span></div>
  <div class="option"><span>${questions[index].options[2]}</span></div>
  <div class="option"><span>${questions[index].options[3]}</span></div>`;
  optionList.innerHtml= optionTag;
}