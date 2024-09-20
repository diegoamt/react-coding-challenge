"use client";

import { useState, useMemo } from "react";

import { ProductCard } from "../productCard";
import { ShoppingCartProduct, Product } from "@/lib/types";
import { useShoppingState } from "@/app/context/ShoppingContext";
import { Eye } from "../icons";

export interface ProductListProps {
    products: Product[];
}

const ITEMS = 3;

export function ProductList({ products }: ProductListProps) {
    const { state, dispatch } = useShoppingState();
    const [page, setPage] = useState(1);
    const showMoreItems = useMemo(() => (ITEMS * page) < products.length, [page, products]);

    const addItemToCart = (product: ShoppingCartProduct) => {
        dispatch({ type: 'ADD_PRODUCT', payload: product });
    }

    return (
        <section className='container md:py-20 py-10'>
            <ul className='grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-8 gap-5'>
                {products.slice(0, ITEMS * page)
                    .filter((product) => state.search ? product.title.toLocaleLowerCase().includes(state.search.toLocaleLowerCase()) : true)
                    .map((product) => {
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
                    className="bg-white border border-gray-200 text-sm font-bold rounded-xl py-4 px-20 hover:bg-gray-200 flex"
                >
                    <Eye className="w-5 h-5 mr-1" /><span className="whitespace-nowrap">Show More</span>
                </button>
            </div> : null}
        </section>
    )
}
