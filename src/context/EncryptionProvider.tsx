import { useState } from 'react';

import { EncryptionContext } from './EncryptionContext';

import type { ReactNode } from 'react';

export const EncryptionProvider = ({ children }: { children: ReactNode }) => {
	const [encryptionKey, setEncryptionKeyState] = useState<CryptoKey | null>(
		null
	);

	const setEncryptionKey = (key: CryptoKey) => setEncryptionKeyState(key);
	const clearEncryptionKey = () => setEncryptionKeyState(null);

	return (
		<EncryptionContext.Provider
			value={{ encryptionKey, setEncryptionKey, clearEncryptionKey }}
		>
			{children}
		</EncryptionContext.Provider>
	);
};
