import { fn } from 'storybook/internal/test';

import Modal from '.';
import Button from '../Button';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
	title: 'Shared/Modal',
	component: Modal,
	args: {
		heading: 'Modal Heading',
		onClose: () => fn(),
	},
	parameters: {
		layout: 'centered',
	},
};
export default meta;

export const Default: Story = {
	render: (args) => (
		<Modal {...args}>
			<div className="font-hubot text-slate-200 flex flex-col gap-2">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolorum optio voluptate animi ea dicta nisi asperiores minus
					quo aliquam deserunt aut odit soluta, similique eos
					molestiae, odio voluptas, saepe alias.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolorum optio voluptate animi ea dicta nisi asperiores minus
					quo aliquam deserunt aut odit soluta, similique eos
					molestiae, odio voluptas, saepe alias.
				</p>
			</div>
		</Modal>
	),
};

export const WithActions: Story = {
	render: (args) => (
		<Modal
			{...args}
			actions={
				<div className="flex gap-2">
					<Button
						isPrimary={true}
						text="Action"
						onClick={fn()}
						className="px-8"
					/>
					<Button
						isPrimary={false}
						text="Action"
						onClick={fn()}
						className="px-5"
					/>
				</div>
			}
		>
			<div className="font-hubot text-slate-200 flex flex-col gap-2">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolorum optio voluptate animi ea dicta nisi asperiores minus
					quo aliquam deserunt aut odit soluta, similique eos
					molestiae, odio voluptas, saepe alias.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolorum optio voluptate animi ea dicta nisi asperiores minus
					quo aliquam deserunt aut odit soluta, similique eos
					molestiae, odio voluptas, saepe alias.
				</p>
			</div>
		</Modal>
	),
};
