import { ProductList } from './ProductList';

import { productCardMock } from '../productCard/mock';

export default {
    title: 'Components/Product List',
    component: ProductList,
    parameters: {
        layout: 'fullscreen',
    },
};

const products = Array(8).fill(productCardMock);

export const Default = {
    args: {
        products,
    }
}