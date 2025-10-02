import { render } from '@testing-library/react';
import GameBoard from './GameBoard';

const props = {
  board: [
    [0, 2, 0, 2],
    [4, 0, 4, 0],
    [0, 8, 0, 8],
    [16, 0, 16, 0],
  ],
};

describe('GameBoard', () => {
  it('renders correctly', () => {
    const { container } = render(<GameBoard {...props} />);

    expect(container).toMatchSnapshot();
  });
});
