import Timestamp from './Timestamp';

const Timestamps = () => {
	return (
		<div className="px-2 flex flex-col gap-2">
			<Timestamp label="Updated" value={new Date().toISOString()} />
			<Timestamp label="Created" value={new Date().toISOString()} />
		</div>
	);
};

export default Timestamps;
