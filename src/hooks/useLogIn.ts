import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { useEncryption } from './useEncryption';
import { setUser } from '../redux/userSlice';

const DEMO_USER_VAULT_SALT = import.meta.env.VITE_DEMO_USER_VAULT_SALT!;
const DEMO_USER_PASSWORD = import.meta.env.VITE_DEMO_USER_PASSWORD!;

export const useLogIn = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [password, setPassword] = useState('');
	const { deriveAndSetEncryptionKey } = useEncryption();
	const [isDisabled, setIsDisabled] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const logIn = async (username: string) => {
		setIsDisabled(true);
		if (password === DEMO_USER_PASSWORD) {
			await deriveAndSetEncryptionKey(password, DEMO_USER_VAULT_SALT);
			setPassword('');
			dispatch(setUser({ id: 'demo-user-1', username }));
			navigate('/');
		} else {
			const message = 'Invalid credentials provided.';
			setError(message);
			setIsDisabled(false);
		}
	};

	return {
		logIn,
		password,
		setPassword,
		isDisabled,
		error,
		setError,
	};
};
