const quizData= [
    {
        question: 'Sözlük tanımına göre hangisi bir sesin adı değildir?',
        a: 'Gümbürtü',
        b: 'Hüngürtü',
        c: 'Höpürtü',
        d: 'Püskürtü',
        correct: 'd',
      },
  
    {
        question: 'Hangi klasik eserin yazarı Yakup Kadri Karaosmanoğludur?',
        a: 'Dokuzuncu Hariciye Koğuşu',
        b: 'Vatan yahut Silistre',
        c: 'Sodom ve Gomore',
        d: 'Ali Babanın çiftliği',
        correct: 'c',
      },
    {
        question: 'Ryan Gosling ve Michelle Williamsın başrolde yer aldığı, 2010da vizyona giren romantik filmin adı hangisidir?',
        a: 'Silver Linings Playbook',
        b: 'La La Land',
        c: 'Shutter Island',
        d: 'Blue Valentine',
        correct: 'd',
      },
    {
        question: 'Herodotun yazdığı, Mısır firavununun dilin kökeni deneyinde, doğunca çobana verilerek kapatılan, o dahil kimseyle konuşturulmayan çocuğun söylediği ilk kelime nedir?',
        a: 'Ver',
        b: 'Anne',
        c: 'Ekmek',
        d: 'Su',
        correct: 'c',
    },
    {
        question: 'Hangisi "Dede Korkut Hikayeleri"ndeki karakterlerden biri değildir?',
        a: 'Bala Hatun',
        b: 'Banu Çiçek',
        c: 'Bamsı Beyrek',
        d: 'Bayındır Han',
        correct: 'a',
    },
    ]


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
   
}

function deselectedanswers(){
    answerEls.forEach[answerEl => answerEl.checked = false]
}

function getSelected(){
    let answer

    answerEls.forEach((answerEl) =>{
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
  
submitBtn.addEventListener("click", ()=> {
    const answer = getSelected()

    // console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score ++
        }
        currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2> Test tamamlandı, 100 puan üzerinden ${score * 20} puan aldınız🥳 </h2>
            <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
      
          `}
    }
})