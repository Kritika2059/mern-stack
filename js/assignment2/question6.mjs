// Function to simulate an asynchronous operation
const asyncOperation = async (value) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value * 2);
        }, 1000);
    });
};

// Function to chain asynchronous operations
const chainAsyncOperations = async () => {
    try {
        let result = await asyncOperation(5);
        console.log('Result after first operation:', result); // 10
        result = await asyncOperation(result);
        console.log('Result after second operation:', result); // 20
        result = await asyncOperation(result);
        console.log('Result after third operation:', result); // 40
    } catch (error) {
        console.error('Error in async operations:', error);
    }
};

// Example
chainAsyncOperations();
