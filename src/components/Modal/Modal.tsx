import { type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

type ModalProps = {
  gameOver: boolean;
  onClose: () => void;
  restartGame: () => void;
} & PropsWithChildren;

export const Modal = ({ gameOver, onClose, restartGame, children }: ModalProps) => {
  return gameOver
    ? createPortal(
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <div className={styles.closeButtonContainer}>
              <button type="button" className={styles.closeButton}>
                <span onClick={onClose}>×</span>
              </button>
            </div>
            <div className={styles.modalContent}>
              <p>Game Over!</p>
              <p>Your Score: {children}</p>
            </div>
            <div>
              <button type="button" onClick={restartGame}>
                New Game
              </button>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;
};
