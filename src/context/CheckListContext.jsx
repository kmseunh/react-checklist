import { createContext, useContext, useState } from 'react';

export const CheckListContext = createContext();

export const CheckListProvider = ({ children }) => {
    const initialCheckList = {
        0: {
            id: 0,
            title: '(Root)',
            childItems: [1],
        },
        1: {
            id: 1,
            title: 'Clothing',
            childItems: [2, 10],
        },
        2: {
            id: 2,
            title: 'Tops',
            childItems: [3, 4, 5, 6, 7, 8, 9],
        },
        3: {
            id: 3,
            title: 'T-shirts',
            childItems: [],
        },
        4: {
            id: 4,
            title: 'Shirts',
            childItems: [],
        },
        5: {
            id: 5,
            title: 'Blouses',
            childItems: [],
        },
        6: {
            id: 6,
            title: 'Sweaters',
            childItems: [],
        },
        7: {
            id: 7,
            title: 'Jackets',
            childItems: [],
        },
        8: {
            id: 8,
            title: 'Pants',
            childItems: [],
        },
        9: {
            id: 9,
            title: 'Dresses',
            childItems: [],
        },
        10: {
            id: 10,
            title: 'Footwear',
            childItems: [11, 12, 13, 14, 15, 16, 17, 18],
        },
        11: {
            id: 11,
            title: 'Sneakers',
            childItems: [],
        },
        12: {
            id: 12,
            title: 'Sandals',
            childItems: [],
        },
        13: {
            id: 13,
            title: 'Boots',
            childItems: [],
        },
        14: {
            id: 14,
            title: 'Dress shoes',
            childItems: [],
        },
        15: {
            id: 15,
            title: 'Slippers',
            childItems: [],
        },
        16: {
            id: 16,
            title: 'Hiking boots',
            childItems: [],
        },
        17: {
            id: 17,
            title: 'Flip-flops',
            childItems: [],
        },
        18: {
            id: 18,
            title: 'Heels',
            childItems: [],
        },
    };

    const [items, setItems] = useState(initialCheckList);

    const handleComplete = (parentId, childId) => {
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
    };

    return (
        <CheckListContext.Provider
            value={{ items, handleComplete, initialCheckList }}
        >
            {children}
        </CheckListContext.Provider>
    );
};

export const useCheckList = () => {
    return useContext(CheckListContext);
};
