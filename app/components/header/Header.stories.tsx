import { Header } from './Header';
import { CartProvider } from '@/app/context/CartContext';
import { StoryFn } from '@storybook/react';

export default {
    title: 'Components/Header',
    component: Header,
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

export const Default = {
    args: {
        isSearchVisible: true,
    }
}
