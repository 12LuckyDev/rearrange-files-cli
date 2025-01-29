#!/usr/bin/env node

import { HandlerMode } from "rearrange-files";
import { Command } from "commander";
import { action } from "./action";

const program = new Command();
program.description(
	"A cli that allows you to reorganize the structure of files based on their creation date."
);

program
	.command("copy [srcPath] [targetPath]")
	.action((...args) => action(HandlerMode.copy, args as [string?, string?]));

program
	.command("move [srcPath] [targetPath]")
	.action((...args) => action(HandlerMode.move, args as [string?, string?]));

program.parse(process.argv);
