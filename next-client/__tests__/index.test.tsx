import Home from '@/pages/index';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
  it('renders the expected text', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      level: 2,
    });

    expect(heading).toHaveTextContent(/welcome to tailwind.css!/i);
  });
});
