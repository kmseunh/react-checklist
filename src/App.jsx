import React, { useState } from 'react';
import { initialCheckList } from './data.js';

export default function CheckList() {
    const [items, setItems] = useState(initialCheckList);

    function handleComplete(parentId, childId) {
        setItems((prevItems) => {
            const updatedItems = { ...prevItems };
            const parentItem = updatedItems[parentId];
            const updatedChildItems = parentItem.childItems.filter(
                (id) => id !== childId
            );

            updatedItems[parentId] = {
                ...parentItem,
                childItems: updatedChildItems,
            };

            return updatedItems;
        });
    }

    const root = items[0];
    const itemIds = root.childItems;
    return (
        <>
            <h2>CheckList</h2>
            <ol>
                {itemIds.map((id) => (
                    <ItemTree
                        key={id}
                        id={id}
                        parentId={0} // Since it's the root, parentId is 0
                        items={items}
                        onComplete={handleComplete}
                    />
                ))}
            </ol>
        </>
    );
}

function ItemTree({ id, parentId, items, onComplete }) {
    const item = items[id];
    const childItems = item.childItems;
    return (
        <li>
            {item.title} &nbsp;
            <button onClick={() => onComplete(parentId, id)}>Complete</button>
            {childItems.length > 0 && (
                <ol>
                    {childItems.map((childId) => (
                        <ItemTree
                            key={childId}
                            id={childId}
                            parentId={id} // Set the current item's ID as parentId
                            items={items}
                            onComplete={onComplete}
                        />
                    ))}
                </ol>
            )}
        </li>
    );
}
