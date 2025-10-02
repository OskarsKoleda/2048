import { fireEvent, render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import Menu from './Menu';

describe('Menu', () => {
  it('renders correctly', () => {
    render(<Menu score={0} resetBoard={() => {}} />);
    expect(screen.getByText('Score: 0')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /New Game/i })).toBeInTheDocument();
  });

  it('calls resetBoard when New Game button is clicked', () => {
    const resetBoardMock = vitest.fn();
    render(<Menu score={0} resetBoard={resetBoardMock} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(resetBoardMock).toHaveBeenCalledTimes(1);
  });
});
