
import Image from "next/image";

export interface ProductCardProps {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    altText: string;
}

export function ProductCard({ title, description, image, altText }: ProductCardProps) {

    return (
        <li className='list-none shadow-xl bg-white  rounded-lg overflow-hidden'>
            <div className='h-full flex flex-col'>
                <div className='aspect-square relative'>
                    <Image loading="lazy" src={image} alt={altText} fill objectFit="cover" />
                    <button
                        title="Add item to Shopping Cart"
                        className="bg-white hover:bg-gray-300 flex items-center justify-center p-0 w-10 h-10 absolute top-5 left-5 text-2xl border border-black"
                    >
                        +
                    </button>
                </div>
                <div className='p-4 flex flex-col gap-2'>
                    <h3 className='text-[##313131]'>{title}</h3>
                    <p className='sm:line-clamp-4 text-xs text-[#88929c]' title={description}>{description}</p>
                </div>
            </div>
        </li>
    )
}
