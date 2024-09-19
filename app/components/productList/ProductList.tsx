"use client";

import { ProductCardProps as Product, ProductCard } from "../productCard";
import { useState } from "react";

export interface ProductListProps {
    products: Product[];
}

const ITEMS = 3;

export function ProductList({ products }: ProductListProps) {
    const [page, setPage] = useState(1);
    const showMoreItems = (ITEMS * page) < products.length;

    return (
        <section className='container md:my-20 my-10'>
            <ul className='grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-8 gap-5'>
                {products.slice(0, ITEMS * page).map(
                    ({ id, title, description, price, image, altText, onClick }) => {
                        return(
                            <ProductCard
                                id={id}
                                title={title}
                                description={description}
                                image={image}
                                altText={altText}
                                price={price}
                                onClick={onClick}
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
