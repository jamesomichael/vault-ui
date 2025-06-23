interface Props {
	placeholder?: string;
	value: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	disabled: boolean;
}

const Input = ({
	placeholder,
	type = 'text',
	value,
	onChange,
	disabled = false,
}: Props) => {
	const isPassword = type === 'password';
	return (
		<input
			type={type}
			disabled={disabled}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={`w-full rounded-lg outline-1 outline-slate-400 placeholder-slate-400 focus:outline-2 focus:outline-blue-400 hover:outline-blue-400 text-xs sm:text-sm h-10 px-3 py-2 ${
				isPassword ? 'placeholder:font-hubot' : 'font-hubot'
			}`}
		/>
	);
};

export default Input;
