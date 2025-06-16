import { LuLock } from 'react-icons/lu';

const LogInForm = () => {
	return (
		<div className="h-full flex flex-col gap-4 items-center mt-60 text-slate-200">
			<LuLock className="text-7xl" />
			<span className="font-hubot text-xl font-bold leading-none">
				Your vault is locked
			</span>
			<span className="font-hubot text-base leading-none">James</span>
			<div className="flex flex-col gap-4 mt-2 p-8 w-[27rem] bg-slate-800 outline-1 outline-slate-400 rounded-xl">
				<input
					type="text"
					placeholder="Master password"
					className="w-full font-hubot rounded-lg outline-1 outline-slate-400 placeholder-slate-400 px-3 py-2"
				/>
				<button className="hover:cursor-pointer transition-all duration-200 font-hubot w-full bg-blue-400 hover:bg-blue-300 h-10 rounded-full text-sm text-slate-900 font-bold">
					Unlock
				</button>
				<div className="flex justify-center items-center">
					<span className="font-hubot leading-none text-sm font-medium">
						or
					</span>
				</div>
				<button className="hover:cursor-pointer transition-all duration-200 font-hubot w-full outline-2 outline-blue-400 hover:bg-blue-400 h-10 rounded-full text-sm text-blue-400 hover:text-slate-900 font-bold">
					Log out
				</button>
			</div>
		</div>
	);
};

export default LogInForm;
