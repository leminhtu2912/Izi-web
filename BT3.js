// Function returning a Promise
const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched successfully!');
      }, 1000);
    });
  };
  
  // Async function using await
  const processData = async () => {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  processData();
  