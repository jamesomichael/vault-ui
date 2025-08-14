import Timestamp from './Timestamp';

interface Props {
	createdAt: string | undefined;
	updatedAt: string | undefined;
}

const Timestamps = ({ createdAt, updatedAt }: Props) => {
	return (
		<div className="px-2 flex flex-col gap-2">
			{updatedAt && <Timestamp label="Updated" value={updatedAt} />}
			{createdAt && <Timestamp label="Created" value={createdAt} />}
		</div>
	);
};

export default Timestamps;
