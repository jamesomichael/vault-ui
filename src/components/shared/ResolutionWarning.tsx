import { LuCircleAlert } from 'react-icons/lu';

const ResolutionWarning = () => {
	return (
		<div className="p-6 h-full flex gap-4 justify-center items-center bg-slate-900">
			<LuCircleAlert className="text-slate-400 text-8xl min-w-24 leading-none" />
			<div className="flex flex-col justify-center gap-2">
				<span className="leading-6 sm:leading-none font-hubot font-bold text-2xl sm:text-3xl text-slate-400">
					Your current screen resolution is not supported.
				</span>
				<span className="leading-5 sm:leading-none font-hubot text-sm md:text-base text-slate-200">
					Please use a larger screen to continue.
				</span>
			</div>
		</div>
	);
};

export default ResolutionWarning;
