import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Action from '.';

import { FaTrash } from 'react-icons/fa6';

const mockOnClick = jest.fn();

beforeEach(() => {
	mockOnClick.mockClear();
});

describe('Action', () => {
	it('Renders the button with an icon and title', () => {
		render(<Action title="Delete" Icon={FaTrash} onClick={mockOnClick} />);
		const button = screen.getByTitle('Delete');
		expect(button).toBeInTheDocument();
	});

	it('Calls onClick when a non-destructive action is clicked', async () => {
		const user = userEvent.setup();
		render(<Action title="Edit" Icon={FaTrash} onClick={mockOnClick} />);
		const button = screen.getByTitle('Edit');
		await user.click(button);
		expect(mockOnClick).toHaveBeenCalled();
	});

	it('Shows the confirmation modal when a destructive action is clicked', async () => {
		const user = userEvent.setup();
		render(
			<Action
				title="Delete"
				Icon={FaTrash}
				onClick={mockOnClick}
				isDestructive={true}
			/>
		);
		const button = screen.getByTitle('Delete');
		await user.click(button);
		expect(screen.getByText('Are you sure?')).toBeInTheDocument();
	});

	it('Closes the confirmation modal when a destructive action is cancelled', async () => {
		const user = userEvent.setup();
		render(
			<Action
				title="Delete"
				Icon={FaTrash}
				onClick={mockOnClick}
				isDestructive={true}
			/>
		);
		const button = screen.getByTitle('Delete');
		await user.click(button);
		expect(screen.getByText('Are you sure?')).toBeInTheDocument();
		const cancelButton = screen.getByRole('button', { name: /no/i });
		await user.click(cancelButton);
		expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
		expect(mockOnClick).not.toHaveBeenCalled();
	});

	it('Closes the confirmation modal when the backdrop is clicked', async () => {
		const user = userEvent.setup();
		render(
			<Action
				title="Delete"
				Icon={FaTrash}
				onClick={mockOnClick}
				isDestructive={true}
			/>
		);
		const button = screen.getByTitle('Delete');
		await user.click(button);
		expect(screen.getByText('Are you sure?')).toBeInTheDocument();
		const backdrop = screen.getByTestId('confirmation-modal-backdrop');
		await user.click(backdrop);
		expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
		expect(mockOnClick).not.toHaveBeenCalled();
	});
});
