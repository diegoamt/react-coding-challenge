import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ProductCard, ProductCardProps } from './ProductCard';

import { productCardMock } from './mock';

const ProductCardComponent = (props: ProductCardProps) => {
    return (
        <ProductCard {...props} />
    )
}

describe('Product Card component', () => {
    it('Should render the component properly', async () => {
        const onClickMock = jest.fn();
        render(<ProductCardComponent product={productCardMock} onClick={onClickMock} />);

        await screen.findByText(`USD ${productCardMock.price}`);
        await screen.findByText(productCardMock.title);
    });

    it('Should execute callback on click', async () => {
        const onClickMock = jest.fn();
        render(<ProductCardComponent product={productCardMock} onClick={onClickMock} />);

        const addItemButton = screen.getByText('+');
        fireEvent.click(addItemButton);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
