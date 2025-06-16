import { LuUserRound } from 'react-icons/lu';
import { FaChevronDown } from 'react-icons/fa6';

const UserAccount = () => {
	return (
		<div className="h-full w-full flex items-center justify-end gap-3 p-2">
			<div className="h-full aspect-square rounded-full bg-blue-400 text-blue-950 text-xl flex justify-center items-center">
				<LuUserRound />
			</div>
			<span className="font-hubot text-sm text-slate-100 font-medium">
				Username
			</span>
			<div className="text-slate-300 text-sm">
				<FaChevronDown />
			</div>
		</div>
	);
};

export default UserAccount;
