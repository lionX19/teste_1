// Définition des questions
const questions = [
    {
        question: "Quelle est la capitale de la France?",
        options: ["Berlin", "Londres", "Paris", "Madrid"],
        correctAnswer: 2
    },
    {
        question: "Quel est le plus grand océan du monde?",
        options: ["Atlantique", "Indien", "Arctique", "Pacifique"],
        correctAnswer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Sélection des éléments DOM
const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const finalScore = document.getElementById('final-score');
const resultsContainer = document.getElementById('results-container');

// Initialisation
function initQuiz() {
    totalQuestionsSpan.textContent = questions.length;
    showQuestion(currentQuestionIndex);
}

// Afficher la question actuelle
function showQuestion(index) {
    const question = questions[index];
    questionTitle.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;

        optionDiv.addEventListener('click', () => selectOption(i));
        optionsContainer.appendChild(optionDiv);
    });

    currentQuestionSpan.textContent = index + 1;
}

// Sélection d'une réponse
function selectOption(selectedIndex) {
    const question = questions[currentQuestionIndex];

    if (selectedIndex === question.correctAnswer) {
        score++;
    }

    scoreDisplay.textContent = score;
    nextQuestion();
}

// Passer à la question suivante
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

// Affichage des résultats
function showResults() {
    document.querySelector('main').classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    finalScore.textContent = score;
}

// Écouteurs d'événements
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
});

// Lancer le quiz
initQuiz();
