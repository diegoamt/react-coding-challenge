"use client";

import { useState } from "react";

import { ProductCard } from "../productCard";
import { ShoppingCartProduct, Product } from "@/lib/types";
import { useCart } from "@/app/context/CartContext";

export interface ProductListProps {
    products: Product[];
}

const ITEMS = 3;

export function ProductList({ products }: ProductListProps) {
    const { dispatch } = useCart();
    const [page, setPage] = useState(1);
    const showMoreItems = (ITEMS * page) < products.length;

    const addItemToCart = (product: ShoppingCartProduct) => {
        dispatch({ type: 'ADD_PRODUCT', payload: product });
    }

    return (
        <section className='container md:py-20 py-10'>
            <ul className='grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-8 gap-5'>
                {products.slice(0, ITEMS * page).map(
                    (product) => {
                        return(
                            <ProductCard
                                key={product.id}
                                product={product}
                                onClick={addItemToCart}
                            />
                        )
                })}
            </ul>
            {showMoreItems ? <div className="mt-10 flex justify-center">
                <button
                    onClick={() => setPage(page => page + 1)}
                    className="bg-white border border-gray-200 text-sm font-bold rounded-xl py-4 px-20 hover:bg-gray-200"
                >
                    VER MÁS
                </button>
            </div> : null}
        </section>
    )
}
