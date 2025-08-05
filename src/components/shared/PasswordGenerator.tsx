import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import generator from 'generate-password-browser';

import Modal from './Modal';

import { LuRefreshCcwDot } from 'react-icons/lu';
import { FaRegCopy } from 'react-icons/fa6';

interface Props {
	onClose: () => void;
	onSubmit: (value: string) => void;
}

const PasswordGenerator = ({ onSubmit, onClose }: Props) => {
	const [password, setPassword] = useState<string>('');
	const [length, setLength] = useState(14);
	const [uppercase, setUppercase] = useState(true);
	const [lowercase, setLowercase] = useState(true);
	const [numbers, setNumbers] = useState(true);
	const [symbols, setSymbols] = useState(true);

	const copyToClipboard = () => navigator.clipboard.writeText(password);

	const generatePassword = () => {
		const password = generator.generate({
			length,
			numbers,
			symbols,
			lowercase,
			uppercase,
		});
		setPassword(password);
	};

	useEffect(() => {
		if (!uppercase && !lowercase && !numbers && !symbols) {
			setUppercase(true);
			setLowercase(true);
		} else {
			generatePassword();
		}
	}, [length, uppercase, lowercase, numbers, symbols]);

	const handleLengthChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		isBlur = false
	) => {
		const newLength = Number(e.target.value);
		if (isBlur && newLength < 5) {
			setLength(5);
		} else if (isBlur && newLength > 128) {
			setLength(128);
		} else {
			setLength(newLength);
		}
		generatePassword();
	};

	return createPortal(
		<Modal
			heading="Generator"
			onClose={onClose}
			actions={
				<>
					<button
						onClick={() => {
							onSubmit(password);
							onClose();
						}}
						className="rounded-full bg-blue-400 hover:bg-blue-300 hover:cursor-pointer py-2 px-4 font-hubot text-sm font-semibold antialiased"
					>
						Use this password
					</button>
				</>
			}
		>
			<div className="select-none flex flex-col gap-5">
				<div className="flex justify-between items-center w-full bg-slate-800 h-14 rounded-md px-3">
					<input
						type="text"
						disabled={true}
						placeholder={password}
						className="w-full select-text font-hubot placeholder-white text-sm font-semibold antialiased"
					/>
					<div className="flex items-center gap-1">
						<div
							title="Generate password"
							onClick={() => generatePassword()}
							className="hover:cursor-pointer rounded-md hover:outline-1 hover:outline-blue-400 transition-all duration-150 p-2"
						>
							<LuRefreshCcwDot className="text-slate-100 text-lg" />
						</div>
						<div
							title="Copy password"
							onClick={copyToClipboard}
							className="hover:cursor-pointer rounded-md hover:outline-1 hover:outline-blue-400 transition-all duration-150 p-2"
						>
							<FaRegCopy className="text-slate-100 text-md" />
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<span className="leading-none text-xs font-hubot font-semibold text-slate-100">
						Options
					</span>
					<div className="px-3 py-2 bg-slate-800 rounded-md">
						<span className="leading-none font-hubot text-xs text-slate-400">
							Length
						</span>
						<input
							type="number"
							defaultValue={length}
							value={length}
							min="5"
							max="128"
							onBlur={(e) => handleLengthChange(e, true)}
							onChange={handleLengthChange}
							className="my-1 font-hubot text-white text-sm p-2 h-10 w-full rounded-md outline-1 outline-slate-400 focus:outline-2 focus:outline-blue-400"
						/>
						<span className="leading-none font-hubot text-xs text-slate-400">
							Value must be between 5 and 128. Use 14 characters
							or more to generate a strong password.
						</span>
					</div>
				</div>
				<div className="px-3 py-2 bg-slate-800 rounded-md">
					<span className="leading-none font-hubot text-sm font-medium text-slate-100">
						Include
					</span>
					<div className="py-2 flex justify-between items-center gap-1.5 font-hubot text-slate-100 text-xs antialiased font-medium">
						{[
							{
								id: 'uppercase',
								label: 'A-Z',
								checked: uppercase,
								onChange: () => setUppercase((prev) => !prev),
							},
							{
								id: 'lowercase',
								label: 'a-z',
								checked: lowercase,
								onChange: () => setLowercase((prev) => !prev),
							},
							{
								id: 'numbers',
								label: '0-9',
								checked: numbers,
								onChange: () => setNumbers((prev) => !prev),
							},
							{
								id: 'symbols',
								label: '!@#$%^&*',
								checked: symbols,
								onChange: () => setSymbols((prev) => !prev),
							},
						].map(({ id, label, checked, onChange }) => {
							return (
								<div
									key={id}
									className="flex items-center gap-1.5"
								>
									<input
										type="checkbox"
										id={id}
										checked={checked}
										className="scale-125"
										onChange={onChange}
									/>
									<label
										htmlFor={id}
										className="select-none font-hubot text-slate-100 text-xs antialiased"
									>
										{label}
									</label>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Modal>,
		document.body
	);
};

export default PasswordGenerator;
