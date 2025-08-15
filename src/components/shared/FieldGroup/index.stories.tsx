import { useState } from 'react';

import FieldGroup from '.';
import Field from '../Field';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof FieldGroup>;

const meta: Meta<typeof FieldGroup> = {
	title: 'Shared/FieldGroup',
	component: FieldGroup,
	args: {},
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div className="max-w-96 sm:w-96">
				<Story />
			</div>
		),
	],
};
export default meta;

export const Default: Story = {
	render: (args) => {
		const [password, setPassword] = useState('p455w0rd123');
		return (
			<FieldGroup {...args}>
				<Field
					type="text"
					label="Text Field Label"
					value="Sample text"
					isEditable={false}
				/>
				<Field
					type="text"
					label="Password Field Label"
					value={password}
					isPassword={true}
					isEditable={false}
					shouldMask={true}
					canCopy={true}
					onPasswordGeneration={(value) => setPassword(value)}
				/>
				<Field
					type="text"
					label="Link Field Label"
					value="https://jamesmichael.dev/projects/vault"
					isEditable={false}
					canCopy={true}
					isUri={true}
				/>
				<Field
					type="checkbox"
					label="Checkbox Field Label"
					value={false}
					isEditable={false}
				/>
				<Field
					type="dropdown"
					label="Dropdown Field Label"
					dropdownOptions={[{ id: '1', label: 'Option 1' }]}
					isEditable={false}
				/>
			</FieldGroup>
		);
	},
};

export const Editable: Story = {
	render: (args) => {
		const [text, setText] = useState('Sample text');
		const [password, setPassword] = useState('p455w0rd123');
		const [link, setLink] = useState(
			'https://jamesmichael.dev/projects/vault'
		);
		const [checked, setChecked] = useState(false);

		return (
			<FieldGroup {...args}>
				<Field
					type="text"
					label="Text Field Label"
					value={text}
					isEditable={true}
					onChange={(e) => setText(e.target.value)}
				/>
				<Field
					type="text"
					label="Password Field Label"
					value={password}
					isPassword={true}
					isEditable={false}
					shouldMask={true}
					onPasswordGeneration={(value) => setPassword(value)}
				/>
				<Field
					type="text"
					label="Link Field Label"
					value={link}
					isEditable={true}
					onChange={(e) => setLink(e.target.value)}
					isUri={true}
				/>
				<Field
					type="checkbox"
					label="Checkbox Field Label"
					value={checked}
					isEditable={true}
					onChange={() => setChecked((prev) => !prev)}
				/>
				<Field
					type="dropdown"
					label="Dropdown Field Label"
					dropdownOptions={[{ id: '1', label: 'Option 1' }]}
					isEditable={true}
				/>
			</FieldGroup>
		);
	},
};
