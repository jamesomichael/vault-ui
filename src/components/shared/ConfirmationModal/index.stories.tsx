import { fn } from 'storybook/test';

import ConfirmationModal from '.';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ConfirmationModal>;

const meta: Meta<typeof ConfirmationModal> = {
	title: 'Shared/ConfirmationModal',
	component: ConfirmationModal,
	args: {
		onCancel: fn(),
		onConfirm: fn(),
		onClose: fn(),
		heading: 'Are you sure?',
		text: 'This action cannot be undone.',
	},
	parameters: {
		layout: 'centered',
	},
};
export default meta;

export const Default: Story = {};
