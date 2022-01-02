import fs from "fs";
import path from "path";
import chalk from "chalk";
var inquirer = require("inquirer");

type ReadMeInquirerResponse = {
  packageName: string;
  packageDesc: string;
  twitterName: string;
  twitterLink: string;
};

const genREADME = async (destinationOption: string): Promise<void> => {
  let inquirerQuestions = [
    {
      type: "input",
      name: "packageName",
      message: "name of package?",
    },
    {
      type: "input",
      name: "packageDesc",
      message: "description of package?",
    },
    {
      type: "input",
      name: "twitterName",
      message: "what do you go by on twitter?",
    },
    {
      type: "input",
      name: "twitterLink",
      message: "url to your twitter?",
    },
  ];

  // prettier-ignore
  const inquirerResponse: ReadMeInquirerResponse = await inquirer.prompt(inquirerQuestions);

  let finalReadMe = `
<h1 style="font-weight:bold" align="center">${inquirerResponse.packageName}</h1>
<div align="center">
  <strong>${inquirerResponse.packageDesc}</strong>
</div>
<div align="center">
  <br>
</div>

<div align="center">
  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square"
      alt="API stability" />
  </a>
</div>
<div align="center">
  <sub>just a quick personal project by
  <a href="${inquirerResponse.twitterLink}">${inquirerResponse.twitterName}</a>
</div>

&nbsp;

## instructions

**1. install packages**

- use \`npm i\` to install the dependencies

## notes

- this will continue to support more quick setups
- first time doing javascript/typescript in a long time

---

&nbsp;

<h1 align="center">dev</h1>

## features

- [x] doesn't do anything yet

       `;

  fs.writeFile(path.join(destinationOption, "README.md"), finalReadMe, (e) => {
    if (e) {
      if (e?.message.includes("no such file or directory")) {
        fs.mkdir(path.join(destinationOption), { recursive: true }, (e) => {
          if (e) {
            console.log(
              chalk.bgRed(
                "could not create specified directory...maybe try not specifiying directory, which will put file in current location"
              )
            );
          } else {
            fs.writeFile(path.join(destinationOption, "README.md"), finalReadMe, (e) => {
              if (e) {
                console.log(
                  chalk.bgRed(
                    "this failed because we built this program really fast...try not specifying a directory if you did"
                  )
                );
              } else {
                console.log(chalk.bgGreen("README.md file created successfully"));
              }
            });
          }
        });
      } else {
        console.log(
          chalk.bgRed("this failed because we built this program really fast...try not specifying a directory if you did")
        );
      }
    } else {
      console.log(chalk.bgGreen("README.md file created successfully"));
    }
  });
};

export { genREADME };
