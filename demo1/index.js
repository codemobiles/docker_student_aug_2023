// docker run -v ./:/app --rm --name nodeapp -it node node /app/index.js
console.log("Hey");

const main = async () => {
  console.log("Running..");
};

// Run the main function in an infinite loop
const runLoop = async () => {
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await main();
  }
};

runLoop();
