// Function to simulate a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to perform an asynchronous task
const performTask = async () => {
    console.log('Task started');
    await delay(2000); // wait for 2 seconds
    console.log('Task completed after 2 seconds');
};

// Example
performTask();
