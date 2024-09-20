import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, defaultValue: any) => {
    const [item, setItem] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item): defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(item));
    }, [key, item]);

    return [item, setItem];
}
