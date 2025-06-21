import React from 'react';

interface Props {
	title: string;
	isDestructive?: boolean;
	onClick?: () => void;
	className?: string;
	Icon: React.ElementType;
}

const Action = ({
	title,
	isDestructive = false,
	onClick,
	className,
	Icon,
}: Props) => {
	return (
		<button
			onClick={onClick}
			title={title}
			className={`hover:cursor-pointer hover:bg-slate-800 hover:outline-slate-800 bg-slate-800 transition-colors duration-200 h-full rounded outline-1 outline-slate-500 flex justify-center items-center w-16 ${
				isDestructive ? 'text-red-300' : 'text-blue-400'
			} ${className}`}
		>
			<Icon />
		</button>
	);
};

export default Action;
