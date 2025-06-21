import { useDispatch } from 'react-redux';

import Action from '../../../shared/Action';

import { useEncryption } from '../../../../hooks/useEncryption';

import { editItem, clearActiveItem } from '../../../../redux/vaultSlice';

import { FaRegTrashCan, FaRegFloppyDisk, FaXmark } from 'react-icons/fa6';

interface LoginItemData {
	id: string;
	type: 'login';
	name: string;
	username: string;
	password: string;
	uri: string;
	isFavourite: boolean;
	folderId?: string | null;
}
interface EditActionsProps {
	data: LoginItemData;
}

const EditActions = ({ data }: EditActionsProps) => {
	const dispatch = useDispatch();
	const { encryptionKey } = useEncryption();

	const saveItem = async () => {
		if (!encryptionKey) {
			console.error('No encryption key found.');
			return;
		}
		try {
			await dispatch(
				editItem({ item: data, key: encryptionKey })
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
			<div className="h-full flex items-center gap-3">
				<Action
					title="Delete"
					Icon={FaRegTrashCan}
					className="text-lg"
					isDestructive={true}
				/>
			</div>
		</div>
	);
};

export default EditActions;
