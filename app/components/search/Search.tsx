"use client";

import { useState } from "react";
import { Search as SearchIcon } from "../icons"
import { FormEvent, ChangeEvent } from "react";
import { useShoppingState } from "@/app/context/ShoppingContext";

export interface SearchProps {
    placeholder: string;
}

export function Search({ placeholder }: SearchProps) {
    const [text, setText] = useState('');
    const { state, dispatch } = useShoppingState();

    const onsubmit = (e: FormEvent ) => {
        e.preventDefault();
        dispatch({ type: 'SEARCH', payload: text });
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const value = e.target.value;
        setText(value);
    };

    return (
        <div>
            <form onSubmit={onsubmit}>
                <div className="relative">
                    <input
                        value={text}
                        onChange={handleChange}
                        className="rounded-xl px-6 py-1 lg:min-w-[400px] pr-10"
                        placeholder={placeholder}
                    />
                    <button className="absolute right-1 top-1">
                        <SearchIcon className="w-5 stroke-gray-600 hover:stroke-black" />
                    </button>
                </div>
            </form>
        </div>
    )
}
