// Function to retry an API call a specified number of times
const fetchWithRetry = async (url, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed. Retrying...`);
      if (i === retries - 1) {
        console.error("All retries failed:", error);
        throw error;
      }
    }
  }
};

// Example
fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1", 3)
  .then((data) => console.log(data))
  .catch((error) => console.error("Final failure:", error));
