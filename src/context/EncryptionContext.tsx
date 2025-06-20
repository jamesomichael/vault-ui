import { createContext, useContext, useState } from 'react';

import type { ReactNode } from 'react';

type EncryptionContextType = {
	encryptionKey: CryptoKey | null;
	setEncryptionKey: (key: CryptoKey) => void;
	clearEncryptionKey: () => void;
};

const EncryptionContext = createContext<EncryptionContextType | undefined>(
	undefined
);

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

export const useEncryption = () => {
	const context = useContext(EncryptionContext);
	if (!context) {
		throw new Error(
			'useEncryption must be used within an EncryptionProvider'
		);
	}
	return context;
};
