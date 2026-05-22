import { motion } from 'framer-motion';
import { Monitor, Trophy, Users, ShieldCheck, Laptop, Bus } from 'lucide-react';
// Background ke liye logo import
import backgroundLogo from '../../assets/logo.jpg'; 

const features = [
  { icon: Monitor, title: 'Smart Classes', desc: 'Interactive digital learning environments.' },
  { icon: Trophy, title: 'Sports Activities', desc: 'Extensive athletic programs.' },
  { icon: Users, title: 'Experienced Teachers', desc: 'Dedicated faculty mentorship.' },
  { icon: ShieldCheck, title: 'Safe Environment', desc: '24/7 security & nurturing campus.' },
  { icon: Laptop, title: 'Computer Lab', desc: 'State-of-the-art tech labs.' },
  { icon: Bus, title: 'Transport Facility', desc: 'Safe bus network.' },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden"> {/* absolute positioning ke liye relative */}
      
      {/* --- Translucent Background Logo Watermark --- */}
      <motion.div 
        className="absolute -right-40 -bottom-40 w-96 h-96 opacity-5 pointer-events-none rounded-full"
        animate={{ rotate: 360 }} // Dheere dheere rotate hota rahega
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <img src={backgroundLogo} alt="" className="w-full h-full object-contain rounded-full" />
      </motion.div>
      {/* ----------------------------------------------- */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Why Choose Johnson Public School?</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-brand-light border border-slate-100 hover:shadow-xl transition-shadow group relative z-10 bg-white/50 backdrop-blur-sm" // thoda transparent cards
              >
                <div className="w-14 h-14 rounded-full bg-brand-blue/5 flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
                  <Icon className="h-7 w-7 text-brand-blue group-hover:text-brand-gold transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}