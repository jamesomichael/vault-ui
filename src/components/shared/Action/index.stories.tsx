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
};
export default meta;

export const Default: Story = {
	render: (args) => (
		<div className="h-12">
			<Action {...args} title="Save" className="text-2xl" />
		</div>
	),
};

export const Save: Story = {
	render: (args) => (
		<div className="h-12">
			<Action {...args} title="Save" className="text-2xl" />
		</div>
	),
};

export const Close: Story = {
	render: (args) => (
		<div className="h-12">
			<Action
				{...args}
				title="Close"
				Icon={FaXmark}
				className="text-2xl text-slate-400"
			/>
		</div>
	),
};

export const Restore: Story = {
	render: (args) => (
		<div className="h-12">
			<Action
				{...args}
				title="Restore"
				Icon={TbRestore}
				className="text-2xl"
			/>
		</div>
	),
};

export const Destructive: Story = {
	render: (args) => (
		<div className="h-12">
			<Action
				{...args}
				title="Delete"
				Icon={FaRegTrashCan}
				isDestructive={true}
				className="text-lg"
			/>
		</div>
	),
};
