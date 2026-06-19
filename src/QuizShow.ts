console.log("--------------------QUIZ SHOW---------------------------");
interface question {
  Question: string;
  isCorrect: boolean;
}

const questions: question[] = [
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

//Function to print all questions
function printQuestions() {
  questions.forEach((question) => {
    console.log(question.Question);
    console.log(`${question.isCorrect == true ? "Correct" : "Wrong"}`);
  });
}

//Call the function to print all questions
printQuestions();

//Calculate score
const calculateScore = (questions: question[]): number => {
  const totalScore = questions.filter((f) => f.isCorrect).length;
  return totalScore;
};

const score = calculateScore(questions);
console.log(`Score: ${score} / 5`);

const result = score >= 3 ? "Passed" : "Failed";
console.log(result);
