const taskName1 = "Play fotboll";
const priority1 = 3;
const completed1 = true;
const taskName2 = "Study";
const priority2 = 2;
const completed2 = false;
const taskName3 = "Eat";
const priority3 = 4;
const completed3 = false;
const tasks = [
    {
        "TaskNumb": 1,
        "Task": "Play fotboll",
        "Priority": 3,
        "Completed": true
    },
    {
        "TaskNumb": 2,
        "Task": "Study",
        "Priority": 2,
        "Completed": false
    },
    {
        "TaskNumb": 3,
        "Task": "Eat",
        "Priority": 4,
        "Completed": true
    },
];
let completedCount = 0;
tasks.forEach(item => {
    console.log(`-------------TASK ${item.TaskNumb}-------------`);
    console.log(`Task: ${item.Task} Priority: ${item.Priority} Completed: ${item.Completed}`);
    if (item.Completed === true) {
        completedCount += 1;
    }
});
const totalTasks = tasks.length;
const completionRate = totalTasks / completedCount * 100;
console.log("Completion rate", completionRate);
export {};
// console.log("--------Task 1----------------------")
// console.log("--------Task 2----------------------")
// console.log(`Task: ${taskName2} Priority: ${priority2} Completed: ${completed2}`)
// console.log("--------Task 3----------------------")
// console.log(`Task: ${taskName3} Priority: ${priority3} Completed: ${completed3}`)
// const completedCount: number = Number(completed1) + Number(completed2) + Number(completed3);
// const totalTasks: number = Number(!!taskName1) + Number(!!taskName2) + Number(!!taskName3);
// const completionRate  = totalTasks  / completedCount * 100;
// console.log("Completion rate", completionRate);
//# sourceMappingURL=main.js.map