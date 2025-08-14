export default {
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
