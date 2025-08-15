import Loader from '.';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Loader>;

const meta: Meta<typeof Loader> = {
	title: 'Shared/Loader',
	component: Loader,
	args: {},
	parameters: {
		layout: 'centered',
	},
};
export default meta;

export const Default: Story = {};
