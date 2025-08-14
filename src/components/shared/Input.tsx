interface Props {
	placeholder?: string;
	value: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	disabled: boolean;
	autoFocus?: boolean;
	autoComplete?: string;
	required?: boolean;
	minLength?: number;
}

const Input = ({
	placeholder,
	type = 'text',
	value,
	onChange,
	disabled = false,
	autoFocus = false,
	autoComplete,
	required = false,
	minLength,
}: Props) => {
	const isPassword = type === 'password';
	return (
		<input
			autoFocus={autoFocus}
			autoComplete={autoComplete}
			required={required}
			type={type}
			disabled={disabled}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			minLength={minLength}
			className={`w-full rounded-lg outline-1 outline-slate-400 placeholder-slate-400 focus:outline-2 focus:outline-blue-400 hover:outline-blue-400 text-xs sm:text-sm h-10 px-3 py-2 ${
				isPassword ? 'placeholder:font-hubot' : 'font-hubot'
			}`}
		/>
	);
};

export default Input;
