
export interface ShoppingCartProduct {
    id: number;
    count: number;
    name: string;
    price: number;
}

export interface ShoppingCartProps {
    products: ShoppingCartProduct[];
}

export function ShoppingCart({ products }: ShoppingCartProps) {

    return (
        <div className='text-gray-800'>
            <ul className='bg-white p-10 rounded-xl flex flex-col gap-2'>
                {products.map(({ id, count, name, price }) => {
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
            </ul>
        </div>
    )
}
