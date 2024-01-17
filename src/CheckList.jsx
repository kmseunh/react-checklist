import styled from 'styled-components';
import { useCheckList } from './context/CheckListContext';

const CheckListWrapper = styled.div`
    text-align: left;
    width: 300px; /* Adjust the width according to your design */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ChecklistTitle = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
`;

const ItemWrapper = styled.li`
    margin-bottom: 10px;
    list-style: none;
`;

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const CheckboxInput = styled.input`
    margin-right: 10px;
`;

export default function CheckList() {
    const { items, initialCheckList } = useCheckList();

    const root = items[0];
    const itemIds = root.childItems;
    return (
        <CheckListWrapper>
            <ChecklistTitle>체크리스트</ChecklistTitle>
            <ol>
                {itemIds.map((id) => (
                    <ItemTree key={id} id={id} parentId={0} />
                ))}
            </ol>
        </CheckListWrapper>
    );
}

function ItemTree({ id, parentId }) {
    const { items, handleComplete } = useCheckList();
    const item = items[id];
    const childItems = item.childItems;

    return (
        <ItemWrapper>
            <CheckboxLabel>
                <CheckboxInput
                    type='checkbox'
                    checked={childItems} // Check if there are no child items
                    onChange={() => handleComplete(parentId, id)}
                />
                {item.title}
            </CheckboxLabel>
            {childItems.length > 0 && (
                <ol>
                    {childItems.map((childId) => (
                        <ItemTree key={childId} id={childId} parentId={id} />
                    ))}
                </ol>
            )}
        </ItemWrapper>
    );
}
