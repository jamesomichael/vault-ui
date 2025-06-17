import React from 'react';

interface FieldGroupProps {
	className?: string;
	children: React.ReactNode;
}

const FieldGroup = ({ className, children }: FieldGroupProps) => {
	return (
		<div
			className={`w-full bg-slate-700 rounded flex flex-col divide-y-[1px] divide-slate-500 ${className}`}
		>
			{children}
		</div>
	);
};

export default FieldGroup;
