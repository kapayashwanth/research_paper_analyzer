import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Linkedin, GraduationCap, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-16 border-t border-gray-700 bg-gray-800/30 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
              <User className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Developer Information</h3>
          </div>
          
          <div className="max-w-md mx-auto bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-orange-400 mb-2">KAPA YASHWANTH</h4>
            
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center justify-center gap-2">
                <GraduationCap className="w-4 h-4 text-orange-400" />
                <span className="text-sm">Department of Computer Science and Engineering</span>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-sm">Amrita Vishwa Vidyapeetham, Nagercoil Campus</span>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <a 
                  href="mailto:Kapayashwanth8@gmail.com" 
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Kapayashwanth8@gmail.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Linkedin className="w-4 h-4 text-orange-400" />
                <a 
                  href="https://www.linkedin.com/in/yashwanth-kapa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            © 2025 AI Research Paper Analysis Tool. Developed with ❤️ for academic research.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;