import { useState } from 'react';

import Users from '../../components/auth/Users';
import LogInForm from '../../components/auth/LogInForm';

const users = [
	{ id: 1, name: 'James' },
	{ id: 2, name: 'Test User' },
];

const SelectUser = () => {
	const [activeUser, setActiveUser] = useState(null);
	const [showLogInForm, setShowLogInForm] = useState(false);

	const handleUserSelection = (id, name) => {
		setActiveUser({ id, name });
		setShowLogInForm(true);
	};

	return showLogInForm ? (
		<LogInForm user={activeUser} onLogOut={() => setShowLogInForm(false)} />
	) : (
		<Users users={users} onSelect={handleUserSelection} />
	);
};

export default SelectUser;
