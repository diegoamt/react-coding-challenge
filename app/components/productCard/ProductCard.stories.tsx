import { ProductCard } from './ProductCard';
import { productCardMock } from './mock';

import { StoryFn } from '@storybook/react';


export default {
    title: 'Components/Product Card',
    component: ProductCard,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'gray',
            values: [
                { name: 'gray', value: '#f5f5f5' },
            ]
        }
    },
    decorators: [
        (Story: StoryFn) => (
            <div className="w-[300px]">
                <Story />
            </div>
        ),
    ],
};

export const Default = {
    args: { ...productCardMock }
}
