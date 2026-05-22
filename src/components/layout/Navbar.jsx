import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion'; // Motion import kiya
import logo from '../../assets/logo.jpg'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Gallery', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* --- Animated Logo Section --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} // Page load par side se aayega
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 cursor-pointer"
          >
            {/* Logo Wrapper with Hover Animation */}
            <motion.div 
              className="h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden bg-white shadow-sm border-2 border-brand-gold/50 flex items-center justify-center p-0.5"
              whileHover={{ scale: 1.05, rotate: 5, borderColor: '#D4AF37' }} // Hover par rotate aur scale hoga
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={logo} alt="Johnson Co-Ed Public School Logo" className="h-full w-full object-contain rounded-full" />
            </motion.div>
            
            <span className={`font-heading font-bold text-xl md:text-2xl ${scrolled ? 'text-brand-blue' : 'text-white'}`}>
              Johnson Co-Ed
            </span>
          </motion.div>
          {/* ----------------------------- */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className={`text-sm font-medium transition-colors hover:text-brand-gold ${scrolled ? 'text-brand-blue' : 'text-white'}`}>
                {link}
              </a>
            ))}
            <button className="bg-brand-gold text-brand-blue px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors">
              Admission Open
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-brand-blue' : 'text-white'}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}