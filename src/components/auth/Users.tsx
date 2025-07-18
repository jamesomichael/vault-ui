import { Link } from 'react-router';

import User from './User';

import { FaPlus } from 'react-icons/fa6';
import type { User as UserType } from '../../types/user';

interface Props {
	users: UserType[];
	onSelect: (id: string, username: string) => void;
}

const Users = ({ users, onSelect }: Props) => {
	return (
		<div className="flex flex-wrap justify-center items-center gap-8">
			{users?.map(({ id, username }, i) => (
				<User key={i} id={id} username={username} onClick={onSelect} />
			))}
			<div className="group transition-all duration-200 hover:cursor-pointer p-4 flex flex-col gap-4 md:gap-5 justify-center items-center text-white w-40 h-48 md:w-56 md:h-64 rounded-xl">
				<Link
					to="/auth/create"
					className="transition-all duration-150 text-6xl md:text-8xl group-hover:text-slate-200 text-slate-500 flex justify-center items-center h-24 md:h-36"
				>
					<FaPlus />
				</Link>
				{/* <span className="transition-all duration-150 leading-none font-hubot text-md md:text-lg font-medium text-slate-500 group-hover:text-slate-200 ">
					Add user
				</span> */}
			</div>
		</div>
	);
};

export default Users;
