"use client";

import { useCart } from '@/app/context/CartContext';

export function ShoppingCart() {
    const { state, dispatch } = useCart();

    return (
        <div className='text-gray-800'>
            <ul className='bg-white p-10 rounded-xl flex flex-col gap-2'>
                {state.cart.map(({ id, count, name, price }) => {
                    return (
                        <li key={id} className="border-b-[1px] pb-2">
                            <div className="flex gap-5">
                                <div>{count}</div>
                                <h2 className="grow">{name}</h2>
                                <div>{price}</div>
                            </div>
                        </li>
                    )
                })}
                {state.cart.length === 0 ? <div className='text-xl'>Your Cart is empty</div> : null}
            </ul>
        </div>
    )
}
