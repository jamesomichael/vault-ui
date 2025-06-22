import { useState } from 'react';
import { useSelector } from 'react-redux';

import { LuUserRound } from 'react-icons/lu';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

import type { RootState } from '../../../redux/store';

const UserAccount = () => {
	const [isOpen, setIsOpen] = useState(false);
	const username = useSelector((state: RootState) => state.user.username);

	const toggleDropdown = () => setIsOpen((prev) => !prev);

	return (
		<div className="h-full w-full flex items-center justify-end">
			<div className="relative w-fit h-full">
				<div
					onClick={toggleDropdown}
					className="h-full flex items-center gap-3 px-3 py-2 hover:bg-slate-900 hover:cursor-pointer transition-colors duration-150 relative"
				>
					<div className="h-full aspect-square rounded-full bg-blue-400 text-blue-950 text-xl flex justify-center items-center">
						<LuUserRound />
					</div>
					<span className="font-hubot text-sm text-slate-100 font-medium">
						{username}
					</span>
					<div className="text-slate-300 text-sm">
						{isOpen ? <FaChevronUp /> : <FaChevronDown />}
					</div>
				</div>
				{isOpen && (
					<div className="absolute top-full right-0 mt-0 w-full bg-slate-700 border border-slate-900 rounded shadow-md z-10 py-1">
						<button
							onClick={() => {}}
							className="font-hubot w-full text-left px-4 py-3 text-sm text-slate-100 hover:bg-slate-800 hover:cursor-pointer transition-colors duration-150"
						>
							Log out
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default UserAccount;
