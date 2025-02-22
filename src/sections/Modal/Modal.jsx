import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animation
import styles from './ModalStyles.module.css';

const Modal = ({ project, onClose }) => {
  return (
    <div className={styles.modalBackdrop}>
      <motion.div 
        className={styles.modal} 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.3 }} 
      >
        {/* Close button */}
        <button onClick={onClose} className={styles.closeButton}>X</button>
        
        {/* Modal content */}
        <h2>{project.h3}</h2>
        
        
        {/* Long description */}
        <p className={styles.longDescription}>{project.longDescription}</p>
        
        {/* "Visit" button to GitHub */}
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.visitButton}>Visit</a>
      </motion.div>
    </div>
  );
};

export default Modal;
