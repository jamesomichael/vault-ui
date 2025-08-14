import { fn } from 'storybook/test';

import Button from './Button';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
	title: 'Shared/Button',
	component: Button,
	args: {
		onClick: fn(),
		type: 'button',
		isPrimary: false,
		text: 'Button',
		className: 'px-6',
	},
	parameters: {
		layout: 'centered',
	},
};
export default meta;

export const Default: Story = {};

export const Primary: Story = {
	args: {
		isPrimary: true,
		text: 'Primary Button',
	},
};
