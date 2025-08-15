import { useState } from 'react';

import Input from '.';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
	title: 'Shared/Input',
	component: Input,
	args: {
		placeholder: 'Enter text here',
		type: 'text',
	},
	parameters: {
		layout: 'centered',
	},
};
export default meta;

export const Default: Story = {
	render: (args) => {
		const [text, setText] = useState('');
		return (
			<Input
				{...args}
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
		);
	},
};

export const AutoFocus: Story = {
	render: (args) => {
		const [text, setText] = useState('');
		return (
			<Input
				{...args}
				value={text}
				autoFocus={true}
				onChange={(e) => setText(e.target.value)}
			/>
		);
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Disabled',
	},
};
