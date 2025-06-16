import React from 'react';

interface ButtonProps {
	isPrimary?: boolean;
	text: string;
	className?: string;
}

const Button = ({ isPrimary = true, text, className }: ButtonProps) => {
	const colours = isPrimary
		? 'bg-blue-400 hover:bg-blue-300 text-slate-900'
		: 'hover:bg-blue-400 hover:text-slate-900 border-2 border-blue-400 text-blue-400';
	return (
		<button
			className={`hover:cursor-pointer transition-all duration-200 font-hubot w-full h-10 rounded-full text-xs sm:text-sm font-bold ${colours} ${className}`}
		>
			{text}
		</button>
	);
};

export default Button;
