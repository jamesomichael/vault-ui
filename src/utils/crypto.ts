export const generateEncryptionKey = async (password: string, salt: string) => {
	const encoder = new TextEncoder();
	const baseKey = await window.crypto.subtle.importKey(
		'raw',
		encoder.encode(password),
		{ name: 'PBKDF2' },
		false,
		['deriveKey']
	);

	const algorithm = {
		name: 'PBKDF2',
		salt: Uint8Array.from(atob(salt), (c) => c.charCodeAt(0)),
		iterations: 100_000,
		hash: 'SHA-256',
	};
	const key = await window.crypto.subtle.deriveKey(
		algorithm,
		baseKey,
		{ name: 'AES-GCM', length: 256 },
		true,
		['encrypt', 'decrypt']
	);

	return key;
};
