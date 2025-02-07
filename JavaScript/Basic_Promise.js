const data = true;

const fetchData = new Promise((resolve, reject) => {
  if (data) {
    resolve("data is fetched");
  } else {
    reject("failed to fetch");
  }
});

fetchData
  .then((message) => {
    console.log(message); 
    
    setTimeout(() => {
      const userData = {
        name: "Ishita",
      };
      console.table(userData);
    }, 1000); 
  })
  .catch((error) => {
    console.log(`Can't fetch user data: ${error}`);
  });

console.log("Fetching...");
