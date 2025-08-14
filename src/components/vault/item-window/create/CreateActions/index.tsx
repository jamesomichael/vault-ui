import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Action from '../../../../shared/Action';

import { useEncryption } from '../../../../../hooks/useEncryption';
import { clearActiveItem, createItem } from '../../../../../redux/vaultSlice';

import { FaRegFloppyDisk, FaXmark } from 'react-icons/fa6';

import type { CreateItem } from '../../../../../types/items';

interface Props {
	data: CreateItem;
}

const CreateActions = ({ data }: Props) => {
	const dispatch = useDispatch();
	const { encryptionKey } = useEncryption();

	const saveItem = async () => {
		if (!encryptionKey) {
			console.error('No encryption key found.');
			return;
		}
		try {
			toast.success('Item saved.');
			await dispatch(
				createItem({ item: data, key: encryptionKey })
			).unwrap();
		} catch (error) {
			console.error('Failed to save item:', error.message);
		}
	};

	const closeActiveItem = () => dispatch(clearActiveItem());

	return (
		<div className="h-full border-t-[1px] border-slate-950 bg-slate-700 flex items-center justify-between px-4 py-2">
			<div className="h-full flex items-center gap-3">
				<Action
					title="Close"
					onClick={closeActiveItem}
					Icon={FaXmark}
					className="text-2xl text-slate-400"
				/>
				<Action
					onClick={saveItem}
					title="Save"
					Icon={FaRegFloppyDisk}
					className="text-2xl"
				/>
			</div>
		</div>
	);
};

export default CreateActions;
