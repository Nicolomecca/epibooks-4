import { render, screen } from '@testing-library/react';
import BookList from '../components/BookList';
import fantasy from '../data/fantasy.json';

describe('BookList component', () => {
  it('renders all books when search query is empty', () => {
    render(<BookList />);
    
    const bookElements = screen.getAllByTestId('book-element');
    expect(bookElements.length).toBe(fantasy.length);
  });
});
