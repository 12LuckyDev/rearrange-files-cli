import { Presets, SingleBar } from "cli-progress";
import { HandlerStage, RearrangeProgressModel } from "rearrange-files";

export const barHandler = (): {
	next: (progress: RearrangeProgressModel) => void;
	complete: () => void;
} => {
	const bar = new SingleBar({}, Presets.shades_classic);

	return {
		next: ({ stage, total, current }: RearrangeProgressModel) => {
			if (stage === HandlerStage.files_loaded) {
				bar.start(total, current);
			} else if (stage === HandlerStage.in_progress) {
				bar.update(current + 1);
			}
		},
		complete: () => bar.stop(),
	};
};
