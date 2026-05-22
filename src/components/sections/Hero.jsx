import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import ApplyModal from '../ui/ApplyModal';
// Yahan logo import kiya watermark ke liye (Ensure file named 'logo.jpg')
import headingLogo from '../../assets/logo.jpg'; 

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        
        {/* Background image and overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}
        >
          <div className="absolute inset-0 bg-brand-blue/80 bg-gradient-to-r from-brand-blue to-transparent mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl relative">
            
            {/* --- ADDED: Animated Heading Background Watermark (Refined Positioning) --- */}
            <motion.div 
              className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 pointer-events-none flex items-center justify-center w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }} // Halki si opacity watermark feel ke liye
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <motion.img
                src={headingLogo}
                alt=""
                className="w-80 h-80 md:w-[28rem] md:h-[28rem] object-contain rounded-full blur-[2px]" // Size aur blur
                animate={{ 
                  rotate: [0, 360], // Constant rotation
                  scale: [1, 1.05, 1] // Pulse effect
                }}
                transition={{ 
                  rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
                }}
              />
            </motion.div>
            {/* ---------------------------------------------------------------------- */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/50 font-medium text-sm mb-6">
                Welcome to Johnson Public School
              </span>
              
              {/* Text content */}
              <div className="relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                  Learning Today, <br/>
                  <span className="text-brand-gold">Leading Tomorrow</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
                  Empowering students with quality education, modern facilities, and a safe environment to foster holistic development and academic excellence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-blue px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-colors shadow-lg"
                >
                  Apply Now <ArrowRight className="h-5 w-5" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white/10 text-white backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors shadow-lg">
                  Explore Campus <BookOpen className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}