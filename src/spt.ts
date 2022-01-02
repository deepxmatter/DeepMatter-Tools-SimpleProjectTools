#!/usr/bin/env node

import chalk from "chalk";
const gradient = require("gradient-string");
import { program as spg } from "commander";

// get this cli package data (which comes from your own package)
const spgpkg = require("../package.json");

const main = async (): Promise<void> => {
  if (!process.argv.includes("gen")) {
    console.log(
      gradient.atlas(`
      
      ███████╗██████╗ ████████╗ 
      ██╔════╝██╔══██╗╚══██╔══╝ 
      ███████╗██████╔╝   ██║    
      ╚════██║██╔═══╝    ██║    
      ███████║██║        ██║    
      ╚══════╝╚═╝        ╚═╝    
      
      `)
    );
    console.log(gradient.atlas("welcome to SimpleProjectTools"));
    console.log(gradient.atlas('use "-h" after any command for more info or options'));
  }

  spg.version(spgpkg.version).command("gen", "generate files").parse(process.argv);
};

main().catch((e) => {
  console.error(`error...${e.message}`);
});
