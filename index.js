import { stdin, stdout } from "process";
import { createInterface } from "readline";

import { writeFile } from "fs";
const read = createInterface({
  input: stdin,
  output: stdout,
});

const fileCreation = (fName) => {
  read.question("enter your content:", (answer) => {
    writeFile(`${fName}.txt`, answer, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("file created successfully");

        read.close();
      }
    });
  });
};

read.question("Enter your file name: ", (answer) => {
//   console.log(answer);
  fileCreation(answer);
});
// read.close();
