// Function to simulate a task with a timeout
const simulateWithTimeout = async (taskName, delayTime, timeout) => {
  const task = new Promise((resolve) =>
    setTimeout(() => resolve(`${taskName} done`), delayTime)
  );
  const timer = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), timeout)
  );
  return Promise.race([task, timer]);
};

// Example
simulateWithTimeout("Long Task", 5000, 3000)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
