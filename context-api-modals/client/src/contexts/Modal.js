import { createContext, useState } from "react";
import styles from "./Modal.module.css";

export const ModalContext = createContext();

export default function Modal({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(<div></div>);

  return (
    <ModalContext.Provider value={{ setShowModal, setContent }}>
      {showModal ? (
        <div className={styles.mask}>
          <div className={styles.container}>
            <button onClick={() => setShowModal(false)}>Close</button>
            {content}
          </div>
        </div>
      ) : null}
      {children}
    </ModalContext.Provider>
  );
}
