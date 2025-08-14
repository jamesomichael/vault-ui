import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';

import { useEncryption } from './useEncryption';
import { setUser } from '../redux/userSlice';

const VAULT_API_HOST = import.meta.env.VITE_VAULT_API_HOST!;

export const useCreateUser = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const { deriveAndSetEncryptionKey } = useEncryption();
	const [isDisabled, setIsDisabled] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const createUser = async () => {
		setIsDisabled(true);
		try {
			const response = await axios.post(
				`${VAULT_API_HOST}/api/auth/register`,
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
			if (axios.isAxiosError(error)) {
				if (error?.response?.status === 409) {
					message = 'User already exists.';
				}
			}
			setError(message);
			setIsDisabled(false);
		}
	};

	return {
		createUser,
		username,
		password,
		confirmPassword,
		setConfirmPassword,
		setUsername,
		setPassword,
		isDisabled,
		error,
		setError,
	};
};
