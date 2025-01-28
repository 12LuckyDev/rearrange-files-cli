#!/usr/bin/env node

import { RearrangeOptionsModel } from "rearrange-files";
import { Command } from "commander";

const program = new Command();

program
	.arguments("[srcPath] [targetPath]")
	.action((srcPath?: string, targetPath?: string) => {
		const opt: RearrangeOptionsModel = { srcPath: srcPath ?? process.cwd() };
		if (targetPath) {
			opt.targetPath = targetPath;
		}
		console.log(opt);
	})
	.description(
		"A cli that allows you to reorganize the structure of files based on their creation date."
	);

program.parse(process.argv);
