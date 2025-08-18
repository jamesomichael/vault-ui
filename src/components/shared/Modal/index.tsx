import { FaXmark } from 'react-icons/fa6';

interface Props {
	heading?: string;
	children: React.ReactNode;
	onClose: () => void;
	actions?: React.ReactNode;
}

const Modal = ({ heading, children, onClose, actions }: Props) => {
	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if ((e.target as HTMLElement).id === 'backdrop') {
			onClose();
		}
	};
	return (
		<div
			id="backdrop"
			data-testid="backdrop"
			onClick={handleBackdropClick}
			className="select-none fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-center items-center"
		>
			<div className="relative w-full max-w-[40rem] bg-slate-900 grid grid-rows-[4rem_1fr_4rem] rounded-xl border-[1px] border-slate-400">
				<div className="rounded-t-xl border-b-[1px] border-slate-400 px-3 h-full bg-slate-800 flex justify-between items-center">
					<span className="font-hubot font-bold text-slate-100">
						{heading}
					</span>
					<div
						title="Close"
						onClick={onClose}
						className="hover:cursor-pointer rounded-md hover:outline-1 hover:outline-blue-400 transition-all duration-150 p-1"
					>
						<FaXmark className="text-slate-400 text-2xl" />
					</div>
				</div>
				<div className="p-3">{children}</div>
				<div className="p-3 rounded-b-xl border-t-[1px] border-slate-400 h-full bg-slate-800 flex items-center">
					{actions}
				</div>
			</div>
		</div>
	);
};

export default Modal;
