import { motion } from 'framer-motion';
import { Award, BookOpen, Heart } from 'lucide-react';
// Yahan hum aapki photo import kar rahe hain
import staffPic from '../../assets/staff.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
              Nurturing Future Leaders
            </h2>
            <div className="w-20 h-1 bg-brand-gold"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Under the guidance of <strong>Principal Shahina Khan</strong>, we believe that education extends beyond the classroom. Our dedicated staff and management are committed to providing a holistic environment where every child can discover their true potential.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Excellence in Education</h4>
                  <p className="text-sm text-gray-500">Focus on both academic and moral values.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Dedicated Faculty</h4>
                  <p className="text-sm text-gray-500">Experienced teachers who care like parents.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Staff Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
              <img 
                src={staffPic} 
                alt="Johnson Public School Staff and Management" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white text-2xl font-bold">Principal Shahina Khan</h3>
                  <p className="text-brand-gold text-sm font-medium mb-2">Leading with Vision & Excellence</p>
                  <p className="text-gray-300 text-xs border-t border-white/20 pt-2 mt-2">The Dedicated Team at Johnson Co-Ed Public School</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}