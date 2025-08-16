import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#3C4C45] text-white text-center py-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="bg-[#B7BCA7] p-2 rounded-full">
          <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="#" className="bg-[#B7BCA7] p-2 rounded-full">
          <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
        </a>
        <a href="#" className="bg-[#B7BCA7] p-2 rounded-full">
          <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="#" className="bg-[#B7BCA7] p-2 rounded-full">
          <img src="/icons/youtube.svg" alt="YouTube" className="w-6 h-6" />
        </a>
      </div>

      <nav className="mb-4">
        <ul className="flex justify-center space-x-6 font-bold text-sm">
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/services">SERVICIOS</Link></li>
          <li><Link to="/about">SOBRE NOSOTROS</Link></li>
          <li><Link to="/contact">CONTÁCTENOS</Link></li>
        </ul>
      </nav>

      <div className="bg-black py-2 text-xs">
        Diseñado por: G12 Ingeniería Software – Politécnico Grancolombiano
      </div>
    </footer>
  );
}

export default Footer;