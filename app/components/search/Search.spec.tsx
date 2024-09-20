import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Search } from './Search';
import { ShoppingProvider } from '@/app/context/ShoppingContext';

const placeholder = 'custom placeholder';

const SearchComponent = () => {
  return (
    <>
      <ShoppingProvider>
        <Search placeholder={placeholder} />
      </ShoppingProvider>
    </>
  )
}

describe('Search component', () => {
  it('Should render the placeholder properly', async () => {
    render(<SearchComponent />);

    await screen.findByRole('textbox');
    screen.getByPlaceholderText(placeholder);
  });
});
