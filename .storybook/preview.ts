import type { Preview } from '@storybook/react-vite';

import '../src/index.css';
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: { expanded: true },
};

const preview: Preview = {
	parameters: {
		backgrounds: {
			options: {
				dark: { name: 'Dark', value: '#020618' },
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo',
		},
	},
	initialGlobals: {
		backgrounds: { value: 'dark' },
	},
};

export default preview;
