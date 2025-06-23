import Input from '../shared/Input';
import Button from '../shared/Button';

import { LuUserRoundPlus } from 'react-icons/lu';

import { useCreateUser } from '../../hooks/useCreateUser';
import { NavLink } from 'react-router';

const CreateUserForm = () => {
	const {
		createUser,
		isDisabled,
		username,
		password,
		confirmPassword,
		setConfirmPassword,
		setUsername,
		setPassword,
		error,
		setError,
	} = useCreateUser();

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const sanitisedValue = value.replace(/[^A-Za-z0-9]/g, '');
		setUsername(sanitisedValue);
	};

	const handleUserCreation = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setError('Passwords do not match.');
			return;
		}
		createUser();
	};

	return (
		<div className="h-full w-full flex flex-col gap-4 items-center pt-32 text-slate-200">
			<LuUserRoundPlus className="text-7xl" />
			<span className="font-hubot text-xl font-bold leading-none">
				Create user
			</span>
			<form
				onSubmit={handleUserCreation}
				className="flex flex-col gap-4 mt-2 p-4 md:p-8 w-full md:w-[27rem] bg-slate-800 outline-1 outline-slate-400 rounded-xl"
			>
				<Input
					placeholder="Username"
					disabled={isDisabled}
					onChange={handleUsernameChange}
					value={username}
				/>
				<Input
					type="password"
					disabled={isDisabled}
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Input
					type="password"
					disabled={isDisabled}
					placeholder="Confirm password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<Button text="Create" type="submit" />
				<div className="flex justify-center items-center">
					<span className="font-hubot leading-none text-xs sm:text-sm font-medium">
						or
					</span>
				</div>
				<NavLink
					to="/auth/login"
					className="flex justify-center items-center hover:cursor-pointer transition-all duration-200 font-hubot w-full h-10 rounded-full text-xs sm:text-sm font-bold hover:bg-blue-400 hover:text-slate-900 border-2 border-blue-400 text-blue-400"
				>
					Back to user selection
				</NavLink>
			</form>
			{error && (
				<div className="w-[27rem] flex items-center justify-center px-4 py-3 bg-red-800 outline-2 outline-red-500 rounded">
					<span className="font-hubot text-red-200">{error}</span>
				</div>
			)}
		</div>
	);
};

export default CreateUserForm;
