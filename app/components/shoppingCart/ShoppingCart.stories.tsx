import { ShoppingCart } from './ShoppingCart';
import { StoryFn } from '@storybook/react';
import { CartProvider } from '@/app/context/CartContext';

export default {
    title: 'Components/Shopping Cart',
    component: ShoppingCart,
    parameters: {
        layout: 'fullscreen',
    },
    backgrounds: {
        default: 'gray',
        values: [
            { name: 'gray', value: '#f5f5f5' },
        ]
    },
    decorators: [
        (Story: StoryFn) => (
            <div className="container">
                <CartProvider>
                    <Story />
                </CartProvider>
            </div>
        ),
    ],
};

export const Default = {
    args: {
        products: [
            { id: 1, count: 2, name: 'Mens Cotton Jacket', price: 111.5 },
            { id: 2, count: 1, name: 'Mens Casual Shirt', price: 34.5 },
            { id: 2, count: 2, name: 'Product 3', price: 22.30 },
        ],
    }
};
