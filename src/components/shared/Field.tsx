import { useState } from 'react';

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FaRegCopy } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';

interface FieldProps {
	label: string;
	value: string;
	isUri?: boolean;
	shouldMask?: boolean;
	canCopy?: boolean;
}

const Field = ({
	label,
	value,
	isUri = false,
	shouldMask = false,
	canCopy = false,
}: FieldProps) => {
	const [isMasked, setIsMasked] = useState(shouldMask);

	const toggleIsMasked = () => setIsMasked((prev) => !prev);

	const copyToClipboard = () => navigator.clipboard.writeText(value);

	return (
		<div>
			<div className="rounded hover:bg-slate-600 px-4 py-3 flex items-center justify-between">
				<div className="flex flex-col justify-center gap-2.5">
					<span className="font-hubot leading-none text-xs text-slate-300">
						{label}
					</span>
					<span
						className={`${
							isMasked ? '' : 'font-hubot'
						} leading-none text-sm text-slate-100`}
					>
						{isMasked ? '•'.repeat(value.length) : value}
					</span>
				</div>
				<div className="flex items-center text-xl gap-5 text-slate-300">
					{shouldMask && (
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
					{isUri && (
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
	);
};

export default Field;
