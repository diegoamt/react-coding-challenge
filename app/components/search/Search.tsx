"use client";

import { Cart, Logo } from "../icons"

import { FormEvent } from "react";

export interface SearchProps {
    placeholder: string;
}

export function Search({ placeholder }: SearchProps) {

    const onsubmit = (e: FormEvent ) => {
        e.preventDefault();
        console.log('SUBMIT');
    }

    return (
        <div>
            <form onSubmit={onsubmit}>
                <input className="rounded-xl px-6 py-1 lg:min-w-[400px]" placeholder={placeholder} />
            </form>
        </div>
    )
}
