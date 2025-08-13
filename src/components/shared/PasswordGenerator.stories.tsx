import { screen, userEvent } from '@storybook/testing-library';

import PasswordGenerator from './PasswordGenerator';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof PasswordGenerator>;

const meta: Meta<typeof PasswordGenerator> = {
	title: 'Shared/PasswordGenerator',
	component: PasswordGenerator,
	args: {
		onClose: () => console.log('Closed'),
		onSubmit: (value: string) => console.log('Submitted password:', value),
	},
	parameters: {
		layout: 'centered',
	},
};
export default meta;

export const Default: Story = {};

export const MinLength: Story = {
	play: async () => {
		const lengthInput = screen.getByTestId('password-length-input');
		await userEvent.clear(lengthInput);
		await userEvent.type(lengthInput, '5');
	},
};

export const MaxLength: Story = {
	play: async () => {
		const lengthInput = screen.getByTestId('password-length-input');
		await userEvent.clear(lengthInput);
		await userEvent.type(lengthInput, '128');
	},
};
