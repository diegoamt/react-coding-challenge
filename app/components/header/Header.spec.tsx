import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from './Header';
import { ShoppingProvider } from '@/app/context/ShoppingContext';

const HeaderComponent = () => {
  return (
    <>
      <ShoppingProvider>
        <Header isSearchVisible />
      </ShoppingProvider>
    </>
  )
}

describe('Header component', () => {
  it('Should render properly', async () => {
    render(<HeaderComponent />);

    await screen.findByRole('textbox');
    expect(screen.getByTestId('shopping-cart-link')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
