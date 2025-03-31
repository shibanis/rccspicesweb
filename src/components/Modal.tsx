import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <motion.div 
        initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0, 0, 0, 0)" }}
        animate={{ backdropFilter: "blur(8px)", backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        exit={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0, 0, 0, 0)" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0" 
        onClick={onClose}
      ></motion.div>
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="relative bg-black/40 backdrop-blur-sm p-8 rounded-lg max-w-4xl w-full mx-4 text-white border border-white/20"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          ✕
        </button>
        <h2 className="text-2xl mb-6 font-light">{title}</h2>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal; 