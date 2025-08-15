import { fn } from 'storybook/internal/test';

import User from '.';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof User>;

const meta: Meta<typeof User> = {
	title: 'Auth/User',
	component: User,
	args: {},
	parameters: {
		layout: 'centered',
	},
};
export default meta;

export const Default: Story = {
	args: {
		id: '1',
		username: 'James',
		onClick: fn(),
	},
};
