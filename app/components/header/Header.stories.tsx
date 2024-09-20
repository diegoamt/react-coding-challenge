import { Header } from './Header';
import { ShoppingProvider } from '@/app/context/ShoppingContext';
import { StoryFn } from '@storybook/react';

export default {
    title: 'Components/Header',
    component: Header,
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

export const Default = {
    args: {
        isSearchVisible: true,
    }
}
