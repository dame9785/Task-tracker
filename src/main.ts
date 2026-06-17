    const taskName1 = "Play fotboll";
    const priority1 = 3;
    const completed1 = true;

    const taskName2= "Study";
    const priority2 = 2;
    const completed2 = false;

    const taskName3= "Eat";
    const priority3 = 4;
    const completed3 = false;

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
        completed: true
       },
       {
        taskNumb: 2,   
        task: "Study",
        priority: 2,
        completed: false
       },
         {
         taskNumb: 3,   
         task: "Eat",
         priority: 4,
         completed: true
       },
    ]


    
    tasks.forEach(item => {
        console.log(`-------------TASK ${item.taskNumb}-------------` )
        console.log(`Task: ${item.task} Priority: ${item.priority} Completed: ${item.completed}`)
   });
    
  
    const completedCount = tasks.filter(f => f.completed).length;
    const totalTasks = tasks.length;
    const completionRate = (totalTasks / completedCount * 100);
    console.log("Completion rate", completionRate);

    // console.log("--------Task 1----------------------")
   


    // console.log("--------Task 2----------------------")
    // console.log(`Task: ${taskName2} Priority: ${priority2} Completed: ${completed2}`)


    // console.log("--------Task 3----------------------")
    // console.log(`Task: ${taskName3} Priority: ${priority3} Completed: ${completed3}`)

    // const completedCount: number = Number(completed1) + Number(completed2) + Number(completed3);
    // const totalTasks: number = Number(!!taskName1) + Number(!!taskName2) + Number(!!taskName3);
    // const completionRate  = totalTasks  / completedCount * 100;
    // console.log("Completion rate", completionRate);
