import { render, screen } from '@testing-library/react';
import CommentArea from '../components/CommentArea';

describe('Just Commentarea testing', () => {
  it('mounts correctly the commentarea component', () => {
    render(<CommentArea />);
    // Ricerco l'elemento bottone della commentarea
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
