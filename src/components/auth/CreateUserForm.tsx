import { LuUserRoundPlus } from 'react-icons/lu';
import Input from '../shared/Input';
import Button from '../shared/Button';

const CreateUserForm = () => {
	return (
		<div className="h-full w-full flex flex-col gap-4 items-center pt-32 text-slate-200">
			<LuUserRoundPlus className="text-7xl" />
			<span className="font-hubot text-xl font-bold leading-none">
				Create user
			</span>
			<div className="flex flex-col gap-4 mt-2 p-4 md:p-8 w-full md:w-[27rem] bg-slate-800 outline-1 outline-slate-400 rounded-xl">
				<Input placeholder="Username" />
				<Input placeholder="Password" />
				<Input placeholder="Confirm password" />
				<Button text="Create" />
			</div>
		</div>
	);
};

export default CreateUserForm;
