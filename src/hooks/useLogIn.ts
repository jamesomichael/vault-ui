import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

import { useEncryptionKey } from './useEncryptionKey';

const VAULT_API_HOST = import.meta.env.VITE_VAULT_API_HOST!;

export const useLogIn = () => {
	const navigate = useNavigate();

	const [password, setPassword] = useState('');
	const { deriveAndSetEncryptionKey } = useEncryptionKey();
	const [isDisabled, setIsDisabled] = useState(false);
	const [error, setError] = useState(null);

	const logIn = async (username) => {
		setIsDisabled(true);
		try {
			const response = await axios.post(
				`${VAULT_API_HOST}/api/auth/login`,
				{
					username,
					password,
				},
				{
					withCredentials: true,
				}
			);
			const data = response.data;
			await deriveAndSetEncryptionKey(password, data.user.vaultSalt);
			setPassword('');
			navigate('/');
		} catch (error) {
			let message = 'Something went wrong.';
			if (error?.response?.status === 401) {
				message = 'Invalid credentials provided.';
			}
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
