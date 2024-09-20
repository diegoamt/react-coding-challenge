"use client";

import { useMemo } from "react";

import { Cart, Logo } from "../icons";
import { Search } from "../search";

import { useShoppingState } from "@/app/context/ShoppingContext";

interface HeaderProps {
    isSearchVisible?: boolean;
}

export function Header({ isSearchVisible }: HeaderProps) {
    const { state } = useShoppingState();

    const totalCount = useMemo(() => state.cart.reduce((acc, current) => acc + current.count, 0), [state.cart]);

    return (
        <nav className="bg-[#bbc0dd]">
            <div className="container flex items-center justify-between py-2">
                <Logo />
                {isSearchVisible ? <Search placeholder="Search products ..." /> : null}
                <a href="/cart" data-testid="shopping-cart-link" aria-label="Go to Shopping Cart">
                    <div className="relative pl-3">
                        <Cart className="h-16 fill-gray-100 hover:fill-gray-200" />
                        {totalCount > 0 ? <div className="absolute bottom-0 left-0 rounded-full h-5 w-5 flex justify-center items-center bg-gray-700 text-white font-bold">
                            {totalCount}
                        </div> : null}
                    </div>
                </a>
            </div>
        </nav>
    )
}
