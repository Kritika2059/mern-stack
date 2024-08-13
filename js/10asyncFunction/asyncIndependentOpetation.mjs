// Functions to simulate independent tasks
const fetchTask1 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Task 1 fetched");
};

const fetchTask2 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Task 2 fetched");
};

// Function to run tasks in parallel
const runParallelTasks = async () => {
  await Promise.all([fetchTask1(), fetchTask2()]);
  console.log("All tasks completed in parallel");
};

// Example
runParallelTasks();
