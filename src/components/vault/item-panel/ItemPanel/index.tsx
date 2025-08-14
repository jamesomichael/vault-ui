import VaultList from '../list/VaultList';
import ItemPanelActions from '../ItemPanelActions';

const ItemPanel = () => {
	return (
		<div className="h-full overflow-hidden grid grid-rows-[1fr_3.5rem] border-r-[1px] border-slate-950">
			<VaultList />
			<ItemPanelActions />
		</div>
	);
};

export default ItemPanel;
