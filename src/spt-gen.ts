import { program as spgGen } from "commander";
import { genREADME } from "./gen_commands/genREADME";

spgGen
  .command("readme")
  .description("generate a README.md")
  .option(
    "-d, --destination <type>",
    "set the destination output -- default = current directory",
    "./"
  )
  .action((cmd) => {
    genREADME(cmd.destination);
  });
spgGen.parse(process.argv);

// add more commands here
