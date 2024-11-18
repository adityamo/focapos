import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
};

const Modal = ({ isOpen, children, className }: Props) => {
  if (!isOpen) return null;

  const modalVariants = {
    hidden: { opacity: 0, y: -50, transition: { ease: "easeOut" } }, // initial state
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.4 },
    }, // animated state
    exit: { opacity: 0, y: -50, transition: { ease: "easeIn", duration: 0.3 } }, // exit animation
  };

  return (
    <>
      <motion.div
        key="overlay" // Add a unique key here
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      ></motion.div>
      <motion.div
        key="modal" // Add a unique key here
        className="fixed inset-0 z-50 flex items-center justify-center"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div
          className={`relative w-full max-h-full overflow-y-auto ${className ? className : "max-w-2xl"}`}
        >
          <div className="relative bg-white rounded-lg shadow-lg ">
            {children}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
