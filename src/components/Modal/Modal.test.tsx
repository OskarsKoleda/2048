import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vitest } from 'vitest';
import Modal from './Modal';

const mockOnClose = vitest.fn();
const mockOnAction = vitest.fn();

const props = {
  actionButtonText: 'Test Modal',
  onClose: mockOnClose,
  onAction: mockOnAction,
};

describe('Modal', () => {
  const user = userEvent.setup();

  it('should render children correctly', () => {
    render(
      <Modal {...props}>
        <div>
          <h1>Welcome</h1>
        </div>
      </Modal>,
    );

    const heading = screen.getByRole('heading', { name: /welcome/i });
    expect(heading).toBeInTheDocument();
  });

  it('should render action button with correct text', () => {
    render(
      <Modal {...props}>
        <div />
      </Modal>,
    );

    const button = screen.getByRole('button', { name: /test modal/i });
    expect(button).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', async () => {
    render(
      <Modal {...props}>
        <div />
      </Modal>,
    );

    const closeButton = screen.getByText('×');
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('should call onAction when action button is clicked', async () => {
    render(
      <Modal {...props}>
        <div />
      </Modal>,
    );

    const actionButton = screen.getByRole('button', { name: /test modal/i });
    expect(actionButton).toBeInTheDocument();

    await user.click(actionButton);
    expect(mockOnAction).toHaveBeenCalled();
  });
});
