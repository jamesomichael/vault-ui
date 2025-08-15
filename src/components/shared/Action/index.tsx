import { useState } from 'react';

import ConfirmationModel from '../ConfirmationModal';

interface Props {
	title: string;
	isDestructive?: boolean;
	onClick?: () => void;
	className?: string;
	modalHeading?: string;
	modalText?: string;
	Icon: React.ElementType;
}

const Action = ({
	title,
	isDestructive = false,
	onClick,
	className,
	modalHeading = 'Are you sure?',
	modalText,
	Icon,
}: Props) => {
	const [shouldShowModal, setShouldShowModal] = useState(false);
	return (
		<>
			<button
				onClick={
					isDestructive ? () => setShouldShowModal(true) : onClick
				}
				title={title}
				className={`hover:cursor-pointer hover:bg-slate-800 hover:outline-slate-800 bg-slate-800 transition-colors duration-200 h-full rounded outline-1 outline-slate-500 flex justify-center items-center w-16 ${
					isDestructive ? 'text-red-300' : 'text-blue-400'
				} ${className}`}
			>
				<Icon />
			</button>
			{shouldShowModal && onClick && (
				<ConfirmationModel
					onCancel={() => setShouldShowModal(false)}
					onClose={() => setShouldShowModal(false)}
					onConfirm={onClick}
					heading={modalHeading}
					text={modalText}
				/>
			)}
		</>
	);
};

export default Action;
