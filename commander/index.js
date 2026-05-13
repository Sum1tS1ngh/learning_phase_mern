import { Command } from "commander";
import fs from "fs";

const program = new Command();

program
  .name("file reader")
  .description("help to count line words and letter in file")
  .version("1.0.0");
program
  .command("count")
  .argument("<file>", "enter file to count")
  .option("-l, --lines", "count line")
  .option("-w, --words", "count words")
  .option("-s ,--sentences", "count sentences")
  .action((file, option) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      if (option.lines) {
        const Tlines = data
          .trim()
          .split("\n")
          .filter((s) => {
            return s.trim().length > 0;
          }).length;
        console.log(`lines:${Tlines}`);
        return;
      }
      if (option.words) {
        const Twords = data
          .trim()
          .split(" ")
          .filter((s) => {
            return s.trim().length > 0;
          }).length;
        console.log(`Words:${Twords}`);
        return;
      }
      if (option.sentences) {
        const Tsentences = data
          .trim()
          .split(/[.!?]/)
          .filter((s) => {
            return s.trim().length > 0;
          }).length;
        console.log(`Sentences:${Tsentences}`);
        return;
      }
    });
  });
program.parse();
