// Function to fetch data with error handling
const fetchDataWithErrorHandling = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Caught an error:', error);
    }
};

// Example
fetchDataWithErrorHandling();
