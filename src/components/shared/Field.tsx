import { useState } from 'react';

import PasswordGenerator from './PasswordGenerator';

import { LuRefreshCcwDot } from 'react-icons/lu';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FaRegCopy } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';

interface Props {
	type?: 'text' | 'checkbox' | 'dropdown';
	dropdownOptions?: { id: string; label: string }[];
	isEditable?: boolean;
	isPassword?: boolean;
	onPasswordGeneration?: (value: string) => void;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	label: string;
	value: string | boolean;
	isUri?: boolean;
	shouldMask?: boolean;
	canCopy?: boolean;
}

const Field = ({
	type = 'text',
	dropdownOptions = [],
	isEditable = false,
	isPassword = false,
	onPasswordGeneration,
	onChange,
	label,
	value,
	isUri = false,
	shouldMask = false,
	canCopy = false,
}: Props) => {
	const [isMasked, setIsMasked] = useState(shouldMask);
	const [showModal, setShowModal] = useState(false);

	const toggleIsMasked = () => setIsMasked((prev) => !prev);

	const copyToClipboard = () => navigator.clipboard.writeText(value);

	const openGenerator = () => {
		setShowModal(true);
	};

	return (
		<>
			<div>
				<div className="group rounded hover:bg-slate-600 focus-within:bg-slate-600 transition-colors duration-200 px-4 py-3 flex items-center justify-between">
					<div className="w-full flex flex-col justify-center gap-2">
						{type === 'checkbox' ? (
							<div className="h-6 flex justify-between items-center">
								<span className="font-hubot leading-none text-sm text-slate-100">
									{label}
								</span>
								<input
									type="checkbox"
									disabled={!isEditable}
									onChange={onChange}
									checked={!!value}
								/>
							</div>
						) : (
							<>
								<span className="font-hubot leading-none text-xs text-slate-300">
									{label}
								</span>
								{type === 'dropdown' ? (
									<select
										disabled={!isEditable}
										onChange={onChange}
										value={dropdownOptions[0]?.label}
										className="font-hubot w-full h-6 leading-none text-sm text-slate-100 outline-none rounded bg-transparent"
									>
										{dropdownOptions.map((opt) => (
											<option
												key={opt.id}
												value={opt.label}
												disabled={!isEditable}
											>
												{opt.label}
											</option>
										))}
									</select>
								) : (
									<input
										disabled={!isEditable}
										onChange={onChange}
										value={
											isMasked
												? '•'.repeat(value.length)
												: value
										}
										className={`${
											isMasked ? '' : 'font-hubot'
										} w-full h-6 leading-none text-sm text-slate-100 outline-none bg-transparent`}
									/>
								)}
							</>
						)}
					</div>
					<div className="flex items-center text-xl gap-5 text-slate-300">
						{(isPassword || shouldMask) && (
							<span
								onClick={toggleIsMasked}
								className="hover:cursor-pointer hover:text-slate-100"
							>
								{isMasked ? (
									<FaRegEye title="Show" />
								) : (
									<FaRegEyeSlash title="Hide" />
								)}
							</span>
						)}
						{isPassword && (
							<span
								onClick={openGenerator}
								className="hover:cursor-pointer hover:text-slate-100"
							>
								<LuRefreshCcwDot title="Generate password" />
							</span>
						)}
						{isUri && !isEditable && (
							<a
								href={value}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:cursor-pointer hover:text-slate-100"
							>
								<FiExternalLink title="Launch" />
							</a>
						)}
						{canCopy && (
							<FaRegCopy
								title={`Copy ${label.toLowerCase()}`}
								onClick={copyToClipboard}
								className="hover:cursor-pointer hover:text-slate-100"
							/>
						)}
					</div>
				</div>
			</div>
			{showModal && onPasswordGeneration && (
				<PasswordGenerator
					onSubmit={onPasswordGeneration}
					onClose={() => setShowModal(false)}
				/>
			)}
		</>
	);
};

export default Field;
