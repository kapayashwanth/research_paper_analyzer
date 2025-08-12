import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, RefreshCw, LogOut, User } from 'lucide-react';

interface HeaderProps {
  onReset: () => void;
  userData?: { name: string; email: string } | null;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReset, userData, onLogout }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      {userData && (
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-orange-400" />
              <span className="text-white text-sm">{userData.name}</span>
            </div>
            {onLogout && (
              <motion.button
                onClick={onLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors duration-200"
              >
                <LogOut className="w-3 h-3" />
                Logout
              </motion.button>
            )}
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg">
          <FileSearch className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
          Research Paper Analyzer
        </h1>
      </div>
      
      <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
        Upload your research papers and get AI-powered insights, summaries, and interactive Q&A
      </p>

      <motion.button
        onClick={onReset}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg text-white transition-all duration-200"
      >
        <RefreshCw className="w-4 h-4" />
        New Analysis
      </motion.button>
    </motion.header>
  );
};

export default Header;