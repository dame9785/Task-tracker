interface Task {
  taskNumb: number;
  task: string;
  priority: number;
  completed: boolean;
}

const tasks: Task[] = [
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

const printTaskTracker = (): void => {
  console.log(
    "==================================TASK TRACKER ==================================",
  );
};

const printAllTasks = (): void => {
  tasks.forEach((task) => {
    console.log(`-------------TASK ${task.taskNumb}-------------`);
    console.log(
      `Task: ${task.task} | Priority: ${task.priority} | Completed: ${task.completed}`,
    );
  });
};

//Get Total Task
const getTotalTaskCount = (): number => {
  return tasks.length;
};

//Add new task to Task array
const addTask = (): Task[] => {
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
