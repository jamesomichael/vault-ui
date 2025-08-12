import { render, screen, fireEvent } from '@testing-library/react';
import PasswordGenerator from '../../../src/components/shared/PasswordGenerator';

const mockOnClose = jest.fn();
const mockOnSubmit = jest.fn();

beforeEach(() => {
	mockOnClose.mockClear();
	mockOnSubmit.mockClear();
});

describe('PasswordGenerator', () => {
	it('Renders with default length of 14', () => {
		render(
			<PasswordGenerator onClose={mockOnClose} onSubmit={mockOnSubmit} />
		);
		expect(screen.getByDisplayValue('14')).toBeInTheDocument();
	});

	it('Calls onSubmit with password when "Use this password" is clicked', () => {
		render(
			<PasswordGenerator onClose={mockOnClose} onSubmit={mockOnSubmit} />
		);
		const button = screen.getByRole('button', {
			name: /use this password/i,
		});
		fireEvent.click(button);
		expect(mockOnSubmit).toHaveBeenCalledWith(expect.any(String));
		expect(mockOnClose).toHaveBeenCalled();
	});

	it('Sets length to 5 if input is less than 5 on blur', () => {
		render(
			<PasswordGenerator onClose={mockOnClose} onSubmit={mockOnSubmit} />
		);
		const input = screen.getByRole('spinbutton');
		fireEvent.change(input, { target: { value: '3' } });
		fireEvent.blur(input);
		expect(input).toHaveValue(5);
	});
});
