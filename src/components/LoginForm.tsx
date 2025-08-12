import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Mail, LogIn, GraduationCap, MapPin, Linkedin } from 'lucide-react';

interface LoginFormProps {
  onLogin: (userData: { name: string; email: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create form data for Netlify
    const netlifyFormData = new FormData();
    netlifyFormData.append('form-name', 'login');
    netlifyFormData.append('name', formData.name);
    netlifyFormData.append('email', formData.email);
    netlifyFormData.append('timestamp', new Date().toISOString());

    try {
      // Submit to Netlify Forms
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      // Proceed with login
      onLogin({
        name: formData.name,
        email: formData.email
      });
    } catch (error) {
      console.error('Form submission error:', error);
      // Still proceed with login even if form submission fails
      onLogin({
        name: formData.name,
        email: formData.email
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      {/* Hidden form for Netlify */}
      <form name="login" netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="timestamp" />
      </form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg inline-block mb-4">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-400">
              Sign in to access the Research Paper Analyzer
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-600 placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-600 placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-600 placeholder-gray-400"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.password}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              By signing in, you agree to our terms of service and privacy policy
            </p>
          </div>
        </div>
        
        {/* Developer Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="max-w-sm mx-auto bg-gray-800/30 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="p-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
                <User className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white">Developer</h4>
            </div>
            
            <h5 className="text-orange-400 font-bold mb-2">KAPA YASHWANTH</h5>
            
            <div className="space-y-1 text-xs text-gray-300">
              <div className="flex items-center justify-center gap-1">
                <GraduationCap className="w-3 h-3 text-orange-400" />
                <span>Computer Science and Engineering</span>
              </div>
              
              <div className="flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-orange-400" />
                <span>Amrita Vishwa Vidyapeetham, Nagercoil</span>
              </div>
              
              <div className="flex items-center justify-center gap-1">
                <Mail className="w-3 h-3 text-orange-400" />
                <a 
                  href="mailto:Kapayashwanth8@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Kapayashwanth8@gmail.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-1">
                <Linkedin className="w-3 h-3 text-orange-400" />
                <a 
                  href="https://www.linkedin.com/in/yashwanth-kapa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginForm;