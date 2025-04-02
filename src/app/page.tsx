"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "@/components/Modal";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const navButtons = [
    { title: "ABOUT US", id: "about", component: AboutUs },
    { title: "PRODUCTS", id: "products", component: Products },
    { title: "CONTACT", id: "contact", component: Contact },
    { title: "GALLERY", id: "gallery", component: Gallery },
  ];

  const handleModalToggle = (id: string | null) => {
    setActiveModal(id);
  };

  const getModalContent = (id: string) => {
    const button = navButtons.find(btn => btn.id === id);
    if (!button) return null;
    const Component = button.component;
    return <Component />;
  };

  return (
    <div className="relative h-screen w-screen font-['Source_Sans_3'] bg-black">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 1.5 }}
      >
        <Image
          src="/image.jpg"
          alt="background"
          className="object-cover"
          fill={true}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="absolute flex flex-col top-1/2 inset-x-0 mx-auto -translate-y-1/2 w-full max-w-[90%] sm:max-w-[90%] text-center"
        animate={{ opacity: activeModal ? 0 : 1, y: activeModal ? 20 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo & Divider */}
        <motion.div
          initial={{ y: 168 }}
          animate={{ y: 30 }}
          transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}
        >
          <div className="flex justify-center items-center w-full">
            <Image
              src="/logonew.png"
              alt="logo"
              width={80} 
              height={80}
              className="sm:w-32 sm:h-32 rounded-full border border-white"
            />
          </div>
          <div className="w-[1px] h-16 sm:h-20 bg-white mx-auto"></div>
        </motion.div>

        {/* Title & Subtitle */}
        <div className="h-64 flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: -32 }}
            transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}
            className="w-[180px] sm:w-[580px] h-[1px] bg-white "
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.75 }}
            className="text-white my-4 text-center"
          >
            <div className="flex flex-col items-center font-sans">
              <div className="text-3xl sm:text-5xl font-normal pb-4 sm:pb-8">
                R.C.C. SPICES
              </div>
              <div className="text-sm sm:text-md font-light px-4 sm:px-0">
                THE GOLD STANDARD IN CARDAMOM - TRUSTED QUALITY, UNMATCHED PURITY.
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -32 }}
            animate={{ y: 64 }}
            transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}
            className="w-[180px] sm:w-[580px] h-[1px] bg-white "
          />
        </div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ y: -128 }}
          animate={{ y: 2 }}
          transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}
        >
          <div className="w-[1px] h-16 sm:h-20 bg-white mx-auto"></div>
          <div className="flex flex-wrap justify-center">
            {navButtons.map((button) => (
              <motion.button
                key={button.id}
                onClick={() => handleModalToggle(button.id)}
                className="w-[140px] sm:w-[190px] px-4 sm:px-6 py-2 border border-white text-white 
                hover:bg-white/30 hover:border-white/30 hover:text-white/80 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scaleY: 1.05 }}
                whileTap={{ scaleY: 0.95 }}
              >
                {button.title}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal && navButtons.map((button) => (
          button.id === activeModal && (
            <Modal
              key={button.id}
              isOpen={true}
              onClose={() => setActiveModal(null)}
              title={button.title}
            >
              {getModalContent(button.id)}
            </Modal>
          )
        ))}
      </AnimatePresence>
    </div>
  );
}
