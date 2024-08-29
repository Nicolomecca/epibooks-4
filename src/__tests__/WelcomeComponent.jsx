import { render, screen } from '@testing-library/react';
import Welcome from '../components/Welcome';

describe('Just Welcome testing', () => {
  it('mounts correctly the welcome component', () => {
    render(<Welcome />);
    // Ricerco l'elemento h1
    const headingElement = screen.getByText(/Benvenuti in EpiBooks!/i);
    expect(headingElement).toBeInTheDocument();
  });
});
