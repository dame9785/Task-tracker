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
const printTaskTracker = () => {
    console.log("==================================TASK TRACKER ==================================");
};
const printAllTasks = () => {
    tasks.forEach((task) => {
        console.log(`-------------TASK ${task.taskNumb}-------------`);
        console.log(`Task: ${task.task} | Priority: ${task.priority} | Completed: ${task.completed}`);
    });
};
//Get Total Task
const getTotalTaskCount = () => {
    return tasks.length;
};
//Add new task to Task array
const addTask = () => {
    const newTask = {
        taskNumb: 5,
        task: "Shower",
        priority: 4,
        completed: true,
    };
    //Add new task to TASK ARRAY
    tasks.push(newTask);
    return tasks;
};
//Print task tracker.
printTaskTracker();
//Print All tasks
printAllTasks();
console.log(`Antal uppgifter: ${getTotalTaskCount()}`);
const updatedTaskArray = addTask();
console.log(`Uppdaterad antal uppgifter: ${updatedTaskArray.length}`);
const completedCount = tasks.filter((f) => f.completed).length;
const completionRate = (getTotalTaskCount() / completedCount) * 100;
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
//# sourceMappingURL=main.js.map