import { render, screen } from '@testing-library/react';
import CommentArea from '../components/CommentArea';

describe('Just Commentaerea testing', () => {
  it('mounts correctly the commentarea component', () => {
    render(<CommentArea />);
    // Ricerco l'elemento h1
    const headingElement = screen.getByText(/Benvenuti in EpiBooks!/i);
    expect(headingElement).toBeInTheDocument();
  });
});
