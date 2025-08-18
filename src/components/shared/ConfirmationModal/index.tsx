import React from 'react';
import { createPortal } from 'react-dom';

import { IoWarningOutline } from 'react-icons/io5';
import Button from '../Button';

interface Props {
	onCancel: () => void;
	onConfirm: () => void;
	onClose: () => void;
	heading?: string;
	text?: string;
}

const ConfirmationModel = ({
	onCancel,
	onConfirm,
	onClose,
	heading = 'Are you sure?',
	text,
}: Props) => {
	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if ((e.target as HTMLElement).id === 'confirmation-modal-backdrop') {
			onClose();
		}
	};
	return createPortal(
		<div
			id="confirmation-modal-backdrop"
			data-testid="confirmation-modal-backdrop"
			onClick={handleBackdropClick}
			className="select-none fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-center items-center"
		>
			<div className="relative bg-slate-900 outline-1 outline-slate-700 p-6 w-full shadow-lg rounded-3xl max-w-sm">
				<div className="flex flex-col items-center gap-2">
					<IoWarningOutline size={30} className="text-yellow-400" />
					<div className="flex flex-col items-center justify-center text-center">
						<span className="font-hubot text-white font-bold">
							{heading}
						</span>
						{text && (
							<span className="font-hubot text-white text-sm">
								{text}
							</span>
						)}
					</div>
					<div className="flex flex-col w-full gap-2 mt-3">
						<Button
							onClick={onConfirm}
							isPrimary={true}
							text="Yes"
						/>
						<Button
							onClick={onCancel}
							isPrimary={false}
							text="No"
						/>
					</div>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default ConfirmationModel;
