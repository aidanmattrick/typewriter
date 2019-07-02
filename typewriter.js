const sentence = "hello from lighthouse labs";

let time = 0;


const animation = function() {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 50;
  }
  setTimeout(() => {
    console.log("\n");
  }, 2000);
};

animation();


