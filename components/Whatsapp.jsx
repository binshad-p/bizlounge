import { whatsapp_icon } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-4 right-4 z-40">
      <a
        href="https://wa.me/971544702611?text=Hi%20there!"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green text-white font-medium rounded-full p-3 hover:bg-green-600 transition-shadow shadow-lg md:p-4"
      >
        <Image src={whatsapp_icon} alt="WhatsApp icon" width={35} height={35} />
        <p className="hidden sm:block text-white font-bold">Chat With Us</p>
      </a>
    </div>
  );
};

export default Whatsapp;
