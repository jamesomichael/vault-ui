interface InputProps {
	placeholder?: string;
}

const Input = ({ placeholder }: InputProps) => {
	return (
		<input
			type="text"
			placeholder={placeholder}
			className="w-full font-hubot rounded-lg outline-1 outline-slate-400 placeholder-slate-400 focus:outline-2 focus:outline-blue-400 hover:outline-blue-400 text-xs sm:text-sm h-10 px-3 py-2"
		/>
	);
};

export default Input;
