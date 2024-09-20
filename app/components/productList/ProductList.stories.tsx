import { ProductList } from './ProductList';
import { productCardMock } from '../productCard/mock';
import { ShoppingProvider } from '@/app/context/ShoppingContext';
import { StoryFn } from '@storybook/react';

export default {
    title: 'Components/Product List',
    component: ProductList,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story: StoryFn) => (
            <ShoppingProvider>
                <Story />
            </ShoppingProvider>
        ),
    ],
};

const products = Array(8).fill(productCardMock);

export const Default = {
    args: {
        products,
    }
}