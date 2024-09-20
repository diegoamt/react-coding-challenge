import { ProductList } from './ProductList';

import { productCardMock } from '../productCard/mock';

import { CartProvider } from '@/app/context/CartContext';

import { StoryFn } from '@storybook/react';

export default {
    title: 'Components/Product List',
    component: ProductList,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story: StoryFn) => (
            <CartProvider>
                <Story />
            </CartProvider>
        ),
    ],
};

const products = Array(8).fill(productCardMock);

export const Default = {
    args: {
        products,
    }
}