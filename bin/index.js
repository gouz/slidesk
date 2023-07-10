#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import { program } from "commander";
import open from "open";
import { watch, writeFileSync } from "fs";
import Interpreter from "#interpreter";
import Server from "#server";

let server;

const flow = (talk, options = {}, init = false) => {
  Interpreter.convert(`./${talk}/main.sdf`, options)
    .then(async (html) => {
      if (options.save) {
        writeFileSync(`./${talk}/index.html`, html);
      } else if (init) {
        server = new Server(html, options, `${process.cwd()}/${talk}`);
        if (options.open) {
          if (options.notes)
            await open(`http://localhost:${options.port}/notes`);
          await open(`http://localhost:${options.port}`);
        }
      } else {
        server.setHTML(html);
      }
    })
    .catch((err) => console.error(err));
};

program
  .argument("<talk>")
  .option("-p, --port <int>", "port", 1337)
  .option("--open", "open the default browser")
  .option("--save", "save the html file")
  .option("--notes", "open with speakers notes")
  .option("--pdf", "save as a pdf")
  .description("Convert & present a talk")
  .action((talk, options) => {
    flow(talk, options, true);
    if (!options.save) {
      watch(talk, { recursive: true }, (eventType, filename) => {
        console.log(`♻️  ${filename} is ${eventType}`);
        flow(talk, options);
      });
    }
  });

program.parse();
