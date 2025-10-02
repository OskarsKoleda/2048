import { type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

interface ModalProps extends PropsWithChildren {
  onClose: () => void;
  onAction: () => void;
  actionButtonText: string;
}

const Modal = ({ onClose, onAction, actionButtonText, children }: ModalProps) => {
  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.closeButtonContainer}>
          <button type="button" className={styles.closeButton}>
            <span onClick={onClose}>×</span>
          </button>
        </div>
        <div className={styles.modalContent}>{children}</div>
        <div>
          <button type="button" onClick={onAction}>
            {actionButtonText}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
