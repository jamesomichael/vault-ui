import { fn } from 'storybook/internal/test';
import { MemoryRouter } from 'react-router';

import Users from '.';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Users>;

const meta: Meta<typeof Users> = {
	title: 'Auth/Users',
	component: Users,
	args: {
		users: [
			{
				id: '1',
				username: 'James',
			},
			{
				id: '2',
				username: 'Test',
			},
		],
		onSelect: fn(),
	},
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
};
export default meta;

export const Default: Story = {};

export const NoExistingUsers: Story = {
	args: {
		users: [],
	},
};
