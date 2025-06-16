import { useState } from 'react';

import Users from './Users';
import LogInForm from './LogInForm';
import CreateUser from './CreateUser';

const Auth = () => {
	const [showLogInForm, setShowLogInForm] = useState(false);
	const [showCreationForm, setShowCreationForm] = useState(false);

	return (
		<div className="h-full px-4 bg-slate-900 flex justify-center items-center">
			<span className="fixed top-4 left-8 font-hubot font-medium text-neutral-200 text-2xl">
				Vault
			</span>
			{showLogInForm ? (
				<LogInForm />
			) : showCreationForm ? (
				<CreateUser />
			) : (
				<Users />
			)}
		</div>
	);
};

export default Auth;
