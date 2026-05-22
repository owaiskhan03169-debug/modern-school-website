import { motion } from 'framer-motion';
// Teeno videos import kar rahe hain
import funVideo from '../../assets/fun-activity.mp4';
import yogaVideo from '../../assets/yoga.mp4';
import annualVideo from '../../assets/annual-function.mp4';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Life at Johnson Co-Ed Public School</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Glimpses of our dynamic activities, cultural events, and joyful learning moments.
          </p>
        </div>

        {/* 3 columns ki grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Video 1: Fun Activity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center">
              <video className="w-full h-full object-cover" controls preload="metadata">
                <source src={funVideo} type="video/mp4" />
              </video>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-brand-blue">Fun Learning Activities</h3>
              <p className="text-sm text-gray-500">Engaging games to build teamwork.</p>
            </div>
          </motion.div>

          {/* Video 2: Mandala Yoga */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center">
              <video className="w-full h-full object-cover" controls preload="metadata">
                <source src={yogaVideo} type="video/mp4" />
              </video>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-brand-blue">Mandala Yoga Sessions</h3>
              <p className="text-sm text-gray-500">Promoting physical & mental well-being.</p>
            </div>
          </motion.div>

          {/* Video 3: Annual Function */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center">
              <video className="w-full h-full object-cover" controls preload="metadata">
                <source src={annualVideo} type="video/mp4" />
              </video>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-brand-blue">Annual Function</h3>
              <p className="text-sm text-gray-500">Celebrating culture and student talent.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}