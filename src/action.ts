import {
	HandlerMode,
	RearrangeHandler,
	RearrangeOptionsModel,
} from "rearrange-files";
import { barHandler } from "./bar-handler";

export const action = (mode: HandlerMode, args: [string?, string?]) => {
	const [srcPath, targetPath] = args;

	const opt: RearrangeOptionsModel = {
		srcPath: srcPath ?? process.cwd(),
		mode,
	};

	if (targetPath) {
		opt.targetPath = targetPath;
	}

	const handler = new RearrangeHandler(opt);
	handler.start().subscribe(barHandler());
};
