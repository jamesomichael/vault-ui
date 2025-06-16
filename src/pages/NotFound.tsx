import { LuCircleAlert } from 'react-icons/lu';

const NotFound = () => {
	return (
		<div className="p-4 h-full flex gap-4 justify-center items-center">
			<LuCircleAlert className="text-slate-400 text-8xl leading-none" />
			<div className="flex flex-col justify-center gap-3">
				<span className="leading-none font-hubot font-bold text-5xl md:text-6xl text-slate-400">
					Lost?
				</span>
				<span className="leading-none font-hubot text-sm sm:text-base md:text-xl text-slate-200">
					This page does not exist.
				</span>
			</div>
		</div>
	);
};

export default NotFound;
