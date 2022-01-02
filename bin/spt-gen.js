"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var genREADME_1 = require("./gen_commands/genREADME");
commander_1.program
    .command("readme")
    .description("generate a README.md")
    .option("-d, --destination <type>", "set the destination output -- default = current directory", "./")
    .action(function (cmd) {
    (0, genREADME_1.genREADME)(cmd.destination);
});
commander_1.program.parse(process.argv);
// add more commands here
