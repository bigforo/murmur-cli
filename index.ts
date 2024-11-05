#! /usr/bin/env node

import { Command } from "commander";
import figlet from "figlet";
import { murmurhash } from "./murmur";

const program = new Command();

console.log(figlet.textSync("CLI Murmur %"))

program
  .version("1.0.9")
  .argument('<string1>', 'userId to murmur')
  .description("An CLI for murmur hash")
  .parse(process.argv);

const MAX_UINT_32 = 4294967295
const userId = program.args[0];
const feature1 = program.args[1] ?? "NameFeature1";
const percent = murmurhash(`${feature1}-${userId}`) / MAX_UINT_32
console.log(`User: ${userId} with feature: ${feature1}, view Percentage ${(percent * 100).toFixed(2)}%` );
// https://github.com/WebDevSimplified/feature-flags-sample-code/blob/main/src/lib/featureFlags.ts