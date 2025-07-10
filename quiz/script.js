document.addEventListener("DOMContentLoaded", () =>{

 const startBtn = document.getElementById("start-btn");
 const nextBtn = document.getElementById("next-btn");
 const restartBtn = document.getElementById("restart-btn");
 const queationContainer = document.getElementById("question-container");
 const questionText = document.getElementById("question-text")
 const choicesList = document.getElementById("choices-list")
 const resultContainer = document.getElementById("result-container")
 const scoreDishpaly = document.getElementById("score")

 const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    choices: ["Python", "C", "Java", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Technical Main Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which company developed React.js?",
    choices: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: "Facebook"
  },
  {
    question: "What year was JavaScript created?",
    choices: ["1995", "2000", "1989", "1999"],
    answer: "1995"
  }
 ];
 
 let currentQutionIndex = 0
 let score = 0

 startBtn.addEventListener("click", startQuick)
 nextBtn.addEventListener("click", () =>{
    currentQutionIndex++
    if(currentQutionIndex < questions.length){
      showQuestion()  
    } else{
       showResult()
    }
 })
  
 function startQuick(){
    console.log('start')
    startBtn.classList.add('hedden')
    resultContainer.classList.add('hedden')
    queationContainer.classList.remove('hidden')
    showQuestion()
 }

 function showQuestion(){
    nextBtn.classList.add('hidden')
    questionText.textContent =questions[currentQutionIndex].question;
    choicesList.innerHTML =''//clear choises
    questions[currentQutionIndex].choices.forEach(choise => {
     const li = document.createElement('li');
     li.textContent = choise
     li.addEventListener('click', () => selectAnsewer(choise))
     choicesList.appendChild(li)
    })
 }

 function selectAnsewer(choise){
   const coccerctAnwer = questions[currentQutionIndex].answer;
   if (choise === coccerctAnwer){
    score++;
   }
   nextBtn.classList.remove('hidden')
 }
  
 function showResult(){
    queationContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreDishpaly.textContent = `${score} out of ${queationContainer.length}`
 }



})