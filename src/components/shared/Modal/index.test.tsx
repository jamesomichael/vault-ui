import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from '.';

const mockOnClose = jest.fn();

beforeEach(() => {
	mockOnClose.mockClear();
});

describe('Modal', () => {
	it('Calls onClose when the backdrop is clicked', async () => {
		const user = userEvent.setup();
		render(
			<Modal onClose={mockOnClose} heading="Test Modal">
				<div>Modal Content</div>
			</Modal>
		);
		const backdrop = screen.getByTestId('backdrop');
		await user.click(backdrop);
		expect(screen.getByText('Test Modal')).toBeInTheDocument();
		expect(mockOnClose).toHaveBeenCalled();
	});
});
