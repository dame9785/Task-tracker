// const taskName1 = "Play fotboll";
// const priority1 = 3;
// const completed1 = true;
const tasks = [
    {
        taskNumb: 1,
        task: "Play fotboll",
        priority: 3,
        completed: true,
    },
    {
        taskNumb: 2,
        task: "Study",
        priority: 2,
        completed: false,
    },
    {
        taskNumb: 3,
        task: "Eat",
        priority: 4,
        completed: true,
    },
];
tasks.forEach((task) => {
    console.log(`-------------TASK ${task.taskNumb}-------------`);
    console.log(`Task: ${task.task} Priority: ${task.priority} Completed: ${task.completed}`);
});
const completedCount = tasks.filter((f) => f.completed).length;
const totalTasks = tasks.length;
const completionRate = (totalTasks / completedCount) * 100;
console.log("Completion rate", completionRate);
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
questions.forEach((question) => {
    console.log(question.Question);
    if (question.isCorrect) {
        console.log("Correct");
    }
    else {
        console.log("Wrong");
    }
});
const score = questions.filter((f) => f.isCorrect).length;
console.log(`Score: ${score} / 5`);
console.log("Passed!");
export {};
//# sourceMappingURL=main.js.map