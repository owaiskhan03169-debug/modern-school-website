import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';

export default function ApplyModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-blue/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header stays exactly as you designed */}
            <div className="bg-brand-blue px-6 py-4 flex items-center justify-between shrink-0">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Admission Form</h2>
                <p className="text-brand-gold text-sm font-medium">Johnson Co-Ed Public School</p>
              </div>
              <button onClick={onClose} className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
              {isSubmitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">Application Submitted!</h3>
                  <p className="text-gray-600">Principal Shahina Khan and our team will review your form soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* 1. Student Information */}
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue border-b-2 border-brand-gold/30 pb-2 mb-4">1. Student Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* --- NEW: Branch Selection Dropdown --- */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Branch *</label>
                        <select required className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold bg-white">
                          <option value="">Choose your preferred branch</option>
                          <option value="neelbad">Johnson Co-Ed Public School, Neelbad</option>
                          <option value="ttnagar">Johnson Co-Ed Public School, TT Nagar</option>
                          <option value="main">Johnson Co-Ed Public School</option>
                        </select>
                      </div>
                      {/* -------------------------------------- */}

                      <div><label className="block text-sm font-medium text-gray-700 mb-1">1. Name of Student *</label><input required type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">4. Date of Birth *</label><input required type="date" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                      <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">5. Address *</label><input required type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" placeholder="Kalkheda Road, Neelbad, Bhopal..." /></div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">6. Category *</label>
                        <select required className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold bg-white">
                          <option value="">Select Category</option>
                          <option value="SC">SC</option><option value="ST">ST</option><option value="OBC">OBC</option><option value="GEN">GEN</option>
                        </select>
                      </div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">6. Mobile Number *</label><input required type="tel" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                    </div>
                  </div>

                  {/* 2. Parents Details */}
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue border-b-2 border-brand-gold/30 pb-2 mb-4">2. Parents Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">2. Father's Name (Mr.) *</label><input required type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">3. Mother's Name (Mrs.) *</label><input required type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                      <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">8. Father's Occupation With Annual Income</label><input type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" placeholder="e.g. Business - ₹5,00,000" /></div>
                    </div>
                  </div>

                  {/* 3. Academic Info */}
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue border-b-2 border-brand-gold/30 pb-2 mb-4">3. Academic Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">7. Class In Which Admission Required *</label><input required type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">9. Last Class Passed (With year & School)</label><input type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                    </div>
                  </div>

                  {/* 4. IDs & Bank Details */}
                  <div>
                    <h3 className="text-lg font-bold text-brand-blue border-b-2 border-brand-gold/30 pb-2 mb-4">4. Identification & Bank Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">10. SSSMID No.</label><input type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">11. Aadhar Card No. *</label><input required type="text" placeholder="XXXX-XXXX-XXXX" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">12. Bank Holder Name</label><input type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">12. Bank Name</label><input type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">13. A/C No.</label><input type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-1">13. IFSC Code</label><input type="text" className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-gold" /></div>
                    </div>
                  </div>

                  {/* Declaration Section */}
                  <div className="bg-brand-light p-5 rounded-lg border border-gray-200 mt-6">
                    <h4 className="text-brand-blue font-bold text-center mb-2 uppercase tracking-wide">Declaration</h4>
                    <p className="text-sm text-gray-600 text-center italic mb-4">
                      "I hereby declare that all the information's furnished above are true to the best of my knowledge."
                    </p>
                    <div className="flex justify-between items-end mt-6 px-4">
                      <div className="border-t border-gray-400 pt-2 text-sm text-gray-600 font-medium w-32 text-center">Place</div>
                      <div className="border-t border-gray-400 pt-2 text-sm text-gray-600 font-medium w-32 text-center">Parents Sign.</div>
                    </div>
                  </div>

                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-blue py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-shadow shadow-lg">
                    Submit Admission Form <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}