// Function to simulate a sequential asynchronous operation
const simulateTask = async (taskName, delayTime) => {
  await new Promise((resolve) => setTimeout(resolve, delayTime));
  console.log(`${taskName} completed in ${delayTime} ms`);
};

// Function to run tasks sequentially
const runSequentialTasks = async () => {
  await simulateTask("Task 1", 1000);
  await simulateTask("Task 2", 2000);
  await simulateTask("Task 3", 1500);
  console.log("All tasks completed sequentially");
};

runSequentialTasks();
