console.log("--------------------QUIZ SHOW---------------------------");
const questions = [
    {
        Question: "Question 1",
        isCorrect: true,
    },
    {
        Question: "Question 2",
        isCorrect: false,
    },
    {
        Question: "Question 3",
        isCorrect: true,
    },
    {
        Question: "Question 4",
        isCorrect: true,
    },
    {
        Question: "Question 5",
        isCorrect: false,
    },
];
function printQuestions() {
    questions.forEach((question) => {
        console.log(question.Question);
        console.log(`${question.isCorrect == true ? "Correct" : "Wrong"}`);
    });
}
//Print All questions
printQuestions();
const calculateScore = (questions) => {
    const totalScore = questions.filter((f) => f.isCorrect).length;
    return totalScore;
};
const score = calculateScore(questions);
console.log(`Score: ${score} / 5`);
const result = score >= 3 ? "Passed" : "Failed";
console.log(result);
export {};
//# sourceMappingURL=QuizShow.js.map