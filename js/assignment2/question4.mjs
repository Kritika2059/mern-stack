// Function to fetch data from multiple APIs concurrently
const fetchMultipleData = async () => {
    try {
        const [post1, post2] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/posts/2').then(res => res.json())
        ]);
        console.log('Post 1:', post1);
        console.log('Post 2:', post2);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Example
fetchMultipleData();
