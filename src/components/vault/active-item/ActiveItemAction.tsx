import React from 'react';

interface ActiveItemActionProps {
	title: string;
	isDestructive?: boolean;
	onClick?: () => void;
	className?: string;
	Icon: React.ElementType;
}

const ActiveItemAction = ({
	title,
	isDestructive = false,
	onClick,
	className,
	Icon,
}: ActiveItemActionProps) => {
	return (
		<button
			onClick={onClick}
			title={title}
			className={`hover:cursor-pointer hover:bg-slate-800 hover:outline-slate-800 bg-slate-800 h-full rounded outline-1 outline-slate-500 flex justify-center items-center w-16 ${
				isDestructive ? 'text-red-300' : 'text-blue-400'
			} ${className}`}
		>
			<Icon />
		</button>
	);
};

export default ActiveItemAction;
