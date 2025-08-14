import dayjs from 'dayjs';

interface Props {
	label: string;
	value: string;
}

const Timestamp = ({ label, value }: Props) => {
	return (
		<span className="leading-none flex items-center gap-1 font-hubot text-xs text-slate-300">
			<span className="font-bold">{label}:</span>
			<span>{dayjs(value).format('D MMM YYYY, HH:mm:ss')}</span>
		</span>
	);
};

export default Timestamp;
