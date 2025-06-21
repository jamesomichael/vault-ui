import { useState } from 'react';

import Users from '../../components/auth/Users';
import LogInForm from '../../components/auth/LogInForm';

import type { ActiveUser } from '../../types/user';

const users = [
	{ id: '5b47e903-0ff9-459b-bca7-5297e2995e5f', username: 'James' },
	// { id: 2, name: 'Test User' },
];

const SelectUser = () => {
	const [activeUser, setActiveUser] = useState<ActiveUser>(null);
	const [showLogInForm, setShowLogInForm] = useState(false);

	const handleUserSelection = (id: string, username: string) => {
		setActiveUser({ id, username });
		setShowLogInForm(true);
	};

	return showLogInForm ? (
		<LogInForm user={activeUser} onLogOut={() => setShowLogInForm(false)} />
	) : (
		<Users users={users} onSelect={handleUserSelection} />
	);
};

export default SelectUser;
