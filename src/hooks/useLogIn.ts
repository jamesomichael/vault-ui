import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';

import { useEncryption } from './useEncryption';
import { setUser } from '../redux/userSlice';

const VAULT_API_HOST = import.meta.env.VITE_VAULT_API_HOST!;

export const useLogIn = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [password, setPassword] = useState('');
	const { deriveAndSetEncryptionKey } = useEncryption();
	const [isDisabled, setIsDisabled] = useState(false);
	const [error, setError] = useState(null);

	const logIn = async (username: string) => {
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
			dispatch(setUser({ id: data.user.id, username }));
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
