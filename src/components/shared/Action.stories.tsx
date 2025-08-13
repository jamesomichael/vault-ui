import { fn } from 'storybook/test';

import Action from './Action';

import { FaRegFloppyDisk, FaXmark, FaRegTrashCan } from 'react-icons/fa6';
import { TbRestore } from 'react-icons/tb';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Action>;

const meta: Meta<typeof Action> = {
	title: 'Shared/Action',
	component: Action,
	args: {
		title: 'Save',
		isDestructive: false,
		onClick: fn(),
		className: 'text-2xl py-2.5',
		Icon: FaRegFloppyDisk,
	},
	parameters: {
		layout: 'centered',
	},
};
export default meta;

export const Default: Story = {};

export const Save: Story = {};

export const Close: Story = {
	args: {
		title: 'Close',
		onClick: fn(),
		className: 'text-2xl text-slate-400 py-2.5',
		Icon: FaXmark,
	},
};

export const Restore: Story = {
	args: {
		title: 'Restore',
		onClick: fn(),
		className: 'text-2xl py-2.5',
		Icon: TbRestore,
	},
};

export const Destructive: Story = {
	args: {
		title: 'Delete',
		isDestructive: true,
		onClick: fn(),
		className: 'text-lg py-3.25',
		Icon: FaRegTrashCan,
	},
};
