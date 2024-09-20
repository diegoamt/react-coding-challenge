import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ShoppingCart } from './ShoppingCart';
import { ShoppingProvider } from '@/app/context/ShoppingContext';

const ShoppingCartComponent = () => {
  return (
    <>
      <ShoppingProvider>
        <ShoppingCart />
      </ShoppingProvider>
    </>
  )
}

describe('Shopping Cart component', () => {
  it('Should render empty state', async () => {
    render(<ShoppingCartComponent />);

    expect(screen.getByText('Your Cart is empty')).toBeInTheDocument();
  });
});
