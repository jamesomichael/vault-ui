import { render, screen, fireEvent } from '@testing-library/react';
import { toast } from 'react-toastify';

import PasswordGenerator from '.';

const mockOnClose = jest.fn();
const mockOnSubmit = jest.fn();

jest.mock('react-toastify', () => ({
	toast: {
		success: jest.fn(),
	},
}));

beforeEach(() => {
	mockOnClose.mockClear();
	mockOnSubmit.mockClear();

	Object.defineProperty(navigator, 'clipboard', {
		value: {
			writeText: jest.fn().mockResolvedValue(undefined),
		},
		writable: true,
	});
});

describe('PasswordGenerator', () => {
	it('Renders with default length of 14', () => {
		render(
			<PasswordGenerator onClose={mockOnClose} onSubmit={mockOnSubmit} />
		);
		const input = screen.getByTestId(
			'password-length-input'
		) as HTMLInputElement;
		expect(input.value).toBe('14');
	});

	it('Calls onSubmit with password when "Use this password" is clicked', () => {
		render(
			<PasswordGenerator onClose={mockOnClose} onSubmit={mockOnSubmit} />
		);
		const button = screen.getByTestId('use-password-button');
		fireEvent.click(button);
		expect(mockOnSubmit).toHaveBeenCalledWith(expect.any(String));
		expect(mockOnClose).toHaveBeenCalled();
	});

	it('Sets length to 5 if input is less than 5 on blur', () => {
		render(
			<PasswordGenerator onClose={mockOnClose} onSubmit={mockOnSubmit} />
		);
		const input = screen.getByTestId(
			'password-length-input'
		) as HTMLInputElement;
		fireEvent.change(input, { target: { value: '3' } });
		fireEvent.blur(input);
		expect(input).toHaveValue(5);
	});

	it('Sets length to 128 if input is greater than 128 on blur', () => {
		render(
			<PasswordGenerator onClose={mockOnClose} onSubmit={mockOnSubmit} />
		);
		const input = screen.getByTestId(
			'password-length-input'
		) as HTMLInputElement;
		fireEvent.change(input, { target: { value: '300' } });
		fireEvent.blur(input);
		expect(input).toHaveValue(128);
	});

	it('Defaults to uppercase and lowercase if all options are unchecked', () => {
		render(
			<PasswordGenerator onClose={mockOnClose} onSubmit={mockOnSubmit} />
		);

		const getCheckboxElements = () => ({
			uppercase: screen.getByTestId(
				'uppercase-checkbox'
			) as HTMLInputElement,
			lowercase: screen.getByTestId(
				'lowercase-checkbox'
			) as HTMLInputElement,
			numbers: screen.getByTestId('numbers-checkbox') as HTMLInputElement,
			symbols: screen.getByTestId('symbols-checkbox') as HTMLInputElement,
		});

		const initialCheckboxes = getCheckboxElements();
		Object.values(initialCheckboxes).forEach(
			(checkbox: HTMLInputElement) => {
				if (checkbox.checked) {
					fireEvent.click(checkbox);
				}
			}
		);

		const {
			uppercase: uppercaseCheckbox,
			lowercase: lowercaseCheckbox,
			numbers: numbersCheckbox,
			symbols: symbolsCheckbox,
		} = getCheckboxElements();

		expect(uppercaseCheckbox.checked).toBe(true);
		expect(lowercaseCheckbox.checked).toBe(true);
		expect(numbersCheckbox.checked).toBe(false);
		expect(symbolsCheckbox.checked).toBe(false);
	});

	it('Generates a new password when clicking the refresh icon', () => {
		render(
			<PasswordGenerator onClose={mockOnClose} onSubmit={mockOnSubmit} />
		);

		const passwordInput = screen.getByTestId(
			'password-input'
		) as HTMLInputElement;
		const generateButton = screen.getByTestId('generate-password');
		const oldPassword = passwordInput.getAttribute('placeholder');

		fireEvent.click(generateButton);

		const newPassword = passwordInput.getAttribute('placeholder');
		expect(newPassword).not.toBe(oldPassword);
		expect(newPassword).toHaveLength(14);
	});

	it('Copies the password to clipboard and shows toast on copy button click', () => {
		render(
			<PasswordGenerator onClose={mockOnClose} onSubmit={mockOnSubmit} />
		);
		const copyButton = screen.getByTitle(/copy password/i);
		fireEvent.click(copyButton);
		expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
			expect.any(String)
		);
		expect(toast.success).toHaveBeenCalledWith('Password copied.');
	});
});
