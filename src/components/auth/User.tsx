import { LuUserRound } from 'react-icons/lu';

interface UserProps {
	name: string;
}

const User = ({ id, username, onClick }: UserProps) => {
	return (
		<div
			onClick={() => onClick(id, username)}
			className="group transition-all duration-200 hover:outline-2 hover:cursor-pointer outline-slate-800 hover:bg-slate-700 p-4 flex flex-col gap-4 md:gap-5 justify-center items-center text-white w-40 h-48 md:w-56 md:h-64 rounded-xl bg-slate-800"
		>
			<div className="text-4xl md:text-6xl text-slate-200 bg-slate-500 flex justify-center items-center h-24 md:h-36 aspect-square rounded-full">
				<LuUserRound />
			</div>
			<span className="transition-all duration-500 group-hover:scale-110 line-clamp-1 leading-none font-hubot text-lg md:text-xl font-medium text-slate-200">
				{username}
			</span>
		</div>
	);
};

export default User;
