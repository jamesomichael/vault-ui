import Input from '../shared/Input';
import Button from '../shared/Button';

import { LuLock } from 'react-icons/lu';

const LogInForm = () => {
	return (
		<div className="h-full w-full flex flex-col gap-4 items-center pt-60 text-slate-200">
			<LuLock className="text-7xl" />
			<span className="font-hubot text-xl font-bold leading-none">
				Your vault is locked
			</span>
			<span className="font-hubot text-base leading-none">James</span>
			<div className="flex flex-col gap-4 mt-2 p-4 md:p-8 w-full md:w-[27rem] bg-slate-800 outline-1 outline-slate-400 rounded-xl">
				<Input placeholder="Master password" />
				<Button text="Unlock" />
				<div className="flex justify-center items-center">
					<span className="font-hubot leading-none text-xs sm:text-sm font-medium">
						or
					</span>
				</div>
				<Button isPrimary={false} text="Log out" />
			</div>
		</div>
	);
};

export default LogInForm;
