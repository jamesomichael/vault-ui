import { fn } from 'storybook/test';

import Field from './Field';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Field>;

const meta: Meta<typeof Field> = {
	title: 'Shared/Field',
	component: Field,
	args: {
		type: 'text',
	},
	parameters: {
		layout: 'centered',
	},
};
export default meta;

export const Default: Story = {};
