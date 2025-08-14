import { useState } from 'react';

import Field from '.';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Field>;

const meta: Meta<typeof Field> = {
	title: 'Shared/Field',
	component: Field,
	args: {
		type: 'text',
		label: 'Field',
	},
	parameters: {
		layout: 'centered',
	},
};
export default meta;

export const Default: Story = {};

export const Text: Story = {
	args: {
		type: 'text',
		label: 'Text Field Label',
		value: 'Sample text',
		isEditable: false,
	},
};

export const EditableText: Story = {
	render: (args) => {
		const [text, setText] = useState('Sample text');
		return (
			<Field
				{...args}
				type="text"
				label="Text Field Label"
				value={text}
				isEditable={true}
				onChange={(e) => setText(e.target.value)}
			/>
		);
	},
};

export const EditableTextWithCopy: Story = {
	render: (args) => {
		const [text, setText] = useState('Sample text');
		return (
			<Field
				{...args}
				type="text"
				label="Text Field Label"
				value={text}
				isEditable={true}
				canCopy={true}
				onChange={(e) => setText(e.target.value)}
			/>
		);
	},
};

export const Masked: Story = {
	args: {
		type: 'text',
		label: 'Text Field Label',
		value: 'Sample text',
		isEditable: false,
		shouldMask: true,
	},
};

export const Password: Story = {
	render: (args) => {
		const [text, setText] = useState('p455w0rd123');
		return (
			<Field
				{...args}
				type="text"
				label="Password Field Label"
				value={text}
				isEditable={false}
				isPassword={true}
				shouldMask={true}
				onPasswordGeneration={(value) => setText(value)}
			/>
		);
	},
};

export const PasswordWithCopy: Story = {
	render: (args) => {
		const [text, setText] = useState('p455w0rd123');
		return (
			<Field
				{...args}
				type="text"
				label="Password Field Label"
				value={text}
				isEditable={false}
				isPassword={true}
				shouldMask={true}
				canCopy={true}
				onPasswordGeneration={(value) => setText(value)}
			/>
		);
	},
};

export const Link: Story = {
	args: {
		type: 'text',
		label: 'Link Field Label',
		value: 'https://jamesmichael.dev/projects/vault',
		isEditable: false,
		canCopy: true,
		isUri: true,
	},
};

export const Checkbox: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(true);
		return (
			<Field
				{...args}
				type="checkbox"
				label="Checkbox Field Label"
				value={checked}
				isEditable={true}
				onChange={() => setChecked((prev) => !prev)}
			/>
		);
	},
};

export const Dropdown: Story = {
	args: {
		type: 'dropdown',
		dropdownOptions: [
			{ id: '1', label: 'Option 1' },
			{ id: '2', label: 'Option 2' },
		],
		isEditable: true,
	},
};
