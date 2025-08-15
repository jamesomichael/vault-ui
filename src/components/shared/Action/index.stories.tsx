import { fn } from 'storybook/test';

import Action from '.';

import { FaRegFloppyDisk, FaXmark, FaRegTrashCan } from 'react-icons/fa6';
import { TbRestore } from 'react-icons/tb';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Action>;

const meta: Meta<typeof Action> = {
	title: 'Shared/Action',
	component: Action,
	args: {
		title: 'Action',
		isDestructive: false,
		onClick: fn(),
		Icon: FaRegFloppyDisk,
	},
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<div className="h-12">
				<Story />
			</div>
		),
	],
};
export default meta;

export const Default: Story = {
	args: {
		title: 'Save',
		className: 'text-2xl',
	},
};

export const Save: Story = {
	args: {
		title: 'Save',
		className: 'text-2xl',
	},
};

export const Close: Story = {
	args: {
		title: 'Close',
		className: 'text-2xl text-slate-400',
		Icon: FaXmark,
	},
};

export const Restore: Story = {
	args: {
		title: 'Restore',
		className: 'text-2xl',
		Icon: TbRestore,
	},
};

export const Destructive: Story = {
	args: {
		title: 'Delete',
		className: 'text-lg',
		isDestructive: true,
		Icon: FaRegTrashCan,
	},
};
