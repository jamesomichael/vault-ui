import Input from '../shared/Input';
import Button from '../shared/Button';

import { LuLock } from 'react-icons/lu';

import { useLogIn } from '../../hooks/useLogIn';

const LogInForm = ({ user, onLogOut }) => {
	const { logIn, password, setPassword, isDisabled, error, setError } =
		useLogIn();

	const handlePasswordEntry = (e) => {
		setError(null);
		setPassword(e.target.value);
	};

	const handleLogIn = (e) => {
		e.preventDefault();
		logIn(user.username);
	};

	return (
		<div className="h-full w-full flex flex-col gap-4 items-center pt-32 text-slate-200">
			<LuLock className="text-7xl" />
			<span className="font-hubot text-xl font-bold leading-none">
				Your vault is locked
			</span>
			<span className="font-hubot text-base leading-none">
				{user.username}
			</span>
			<form
				onSubmit={handleLogIn}
				className="flex flex-col gap-4 mt-2 p-4 md:p-8 w-full md:w-[27rem] bg-slate-800 outline-1 outline-slate-400 rounded-xl"
			>
				<Input
					placeholder="Master password"
					disabled={isDisabled}
					type="password"
					value={password}
					onChange={handlePasswordEntry}
				/>
				<Button text="Unlock" onClick={handleLogIn} />
				<div className="flex justify-center items-center">
					<span className="font-hubot leading-none text-xs sm:text-sm font-medium">
						or
					</span>
				</div>
				<Button onClick={onLogOut} isPrimary={false} text="Log out" />
			</form>
			{error && (
				<div className="w-[27rem] flex items-center justify-center px-4 py-3 bg-red-800 outline-2 outline-red-500 rounded">
					<span className="font-hubot text-red-200">{error}</span>
				</div>
			)}
		</div>
	);
};

export default LogInForm;
