import { motion, AnimatePresence } from 'framer-motion';
import preloaderLogo from '../../assets/logo.jpg'; 

export default function LogoPreloader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }} // Poora preloader exit animation
        >
          {/* Logo Pulse Animation */}
          <motion.div 
            className="h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden p-1 bg-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background gold glow for pulse */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-brand-gold/30 blur-xl z-0" 
              animate={{ opacity: [0.1, 0.5, 0.1] }} // Pulse effect
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            <img src={preloaderLogo} alt="Loading Johnson School" className="h-full w-full object-contain rounded-full relative z-10" />
          </motion.div>
          
          <motion.div 
            className="mt-6 font-heading font-bold text-xl md:text-2xl text-brand-blue"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Johnson Co-Ed Public School
          </motion.div>
          
          <motion.p 
            className="text-gray-500 mt-2" 
            animate={{ opacity: [0, 1, 0] }} // Fade out loop text
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            Nurturing Future Leaders...
          </motion.p>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}