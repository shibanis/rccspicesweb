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
    <div className={`relative h-screen w-screen font-['Source_Sans_3']`}>
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

      <motion.div 
        className="absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          opacity: activeModal ? 0 : 1,
          y: activeModal ? 20 : 0 
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        <motion.div
          initial={{ y: 168 }}
          animate={{ y: 40 }}
          transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}
        >
          <div className="flex justify-center items-center w-full">
            <Image
              src="/logonew.png"
              alt="logo"
              width={120}
              height={120}
              className="border-1 rounded-full border-white"
            />
          </div>
          <div className="w-[1px] h-20 bg-white mx-auto"></div>
        </motion.div>

        <div className="h-80 flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: -48 }}
            transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}
            className="w-200 h-[1px] bg-white mx-auto"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.75 }}
            className="text-white my-4 text-center"
          >
            <div className="text-center flex flex-col items-center font-sans">
              <div className="text-5xl font-normal pb-8">
                R.C.C. SPICES
              </div>
              <div className="text-md font-light">
                THE GOLD STANDARD IN CARDAMOM - TRUSTED QUALITY, UNMATCHED PURITY.
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -40 }}
            animate={{ y: 80 }}
            transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}
            className="w-200 h-[1px] bg-white mx-auto"
          />
        </div>

        <motion.div
          initial={{ y: -128 }}
          animate={{ y: -8 }}
          transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}
        >
          <div className="w-[1px] h-20 bg-white mx-auto"></div>
          <div className="flex justify-center">
            {navButtons.map((button) => (
              <motion.button
                key={button.id}
                onClick={() => handleModalToggle(button.id)}
                className="w-[190px] px-6 py-2 border border-white text-white 
                hover:bg-white/30 hover:border-white/30 hover:text-white/80 transition-all duration-300"
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
