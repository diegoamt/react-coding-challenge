import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ProductList, ProductListProps } from './ProductList';
import { ShoppingProvider } from '@/app/context/ShoppingContext';
import { productCardMock } from '../productCard/mock';


const ProductListComponent = (props: ProductListProps) => {
  return (
      <ShoppingProvider>
        <ProductList {...props}  />
      </ShoppingProvider>
  )
}

describe('Product List component', () => {
  it('Should render 3 cards and the "show more" button', async () => {
    const products = Array(8).fill(productCardMock);
    render(<ProductListComponent products={products} />);

    const cards = screen.getAllByTestId('product-card');
    expect(cards.length).toBe(3);
    expect(screen.getByText('Show More')).toBeInTheDocument();
  });

  it('Should render 2 cards without the "show more" button', async () => {
    const products = Array(2).fill(productCardMock);
    render(<ProductListComponent products={products} />);

    const cards = screen.getAllByTestId('product-card');
    expect(cards.length).toBe(2);
    expect(screen.queryByText('Show More')).not.toBeInTheDocument();
  });
});
