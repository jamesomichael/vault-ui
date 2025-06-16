import VaultList from './VaultList';
import AddItem from './AddItem';

const ItemPanel = () => {
	return (
		<div className="h-full overflow-hidden grid grid-rows-[1fr_3.5rem] border-r-[1px] border-slate-950">
			<VaultList />
			<AddItem />
		</div>
	);
};

export default ItemPanel;
