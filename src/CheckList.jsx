import { useCheckList } from './context/CheckListContext';

export default function CheckList() {
    const { items, initialCheckList } = useCheckList();

    const root = items[0];
    const itemIds = root.childItems;
    return (
        <>
            <h2>체크리스트</h2>
            <ol>
                {itemIds.map((id) => (
                    <ItemTree key={id} id={id} parentId={0} />
                ))}
            </ol>
        </>
    );
}

function ItemTree({ id, parentId }) {
    const { items, handleComplete } = useCheckList();
    const item = items[id];
    const childItems = item.childItems;

    return (
        <li>
            {item.title} &nbsp;
            <button onClick={() => handleComplete(parentId, id)}>완료</button>
            {childItems.length > 0 && (
                <ol>
                    {childItems.map((childId) => (
                        <ItemTree key={childId} id={childId} parentId={id} />
                    ))}
                </ol>
            )}
        </li>
    );
}
