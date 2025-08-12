import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PDFUploader from './components/PDFUploader';
import ExtractedInfo from './components/ExtractedInfo';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import { PaperData } from './types';

function App() {
  const [paperData, setPaperData] = useState<PaperData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);

  const handlePDFUpload = async (file: File, extractedText: string, analysisData?: any) => {
    setIsProcessing(true);
    
    if (analysisData) {
      setPaperData(analysisData);
    } else {
      // Fallback if analysis wasn't provided
      const fallbackData: PaperData = {
        title: file.name.replace('.pdf', ''),
        abstract: "Analysis in progress...",
        problemStatement: "Problem statement being analyzed...",
        proposedSolution: "Solution analysis in progress...",
        algorithms: ["Analysis in progress..."],
        summary: "Summary being generated...",
        keyFindings: "Key findings being analyzed...",
        methodology: "Methodology being processed...",
        contributions: "Contributions being identified...",
        fullText: extractedText,
        fileName: file.name
      };
      setPaperData(fallbackData);
    }
    
    setIsProcessing(false);
  };

  const resetApp = () => {
    setPaperData(null);
    setIsProcessing(false);
  };

  const handleLogin = (loginData: { name: string; email: string }) => {
    setUserData(loginData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    resetApp();
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header onReset={resetApp} userData={userData} onLogout={handleLogout} />
        
        <AnimatePresence mode="wait">
          {!paperData && !isProcessing && (
            <motion.div
              key="uploader"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PDFUploader onUpload={handlePDFUpload} />
            </motion.div>
          )}

          {isProcessing && (
            <motion.div
              key="processing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="relative">
                <div className="w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-orange-400/50 rounded-full animate-spin animate-reverse"></div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-white text-lg font-medium"
              >
                Analyzing with AI...
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-2 text-gray-400 text-sm"
              >
                Extracting insights from your research paper
              </motion.p>
            </motion.div>
          )}

          {paperData && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <ExtractedInfo data={paperData} />
              <ChatInterface paperData={paperData} />
            </motion.div>
          )}
        </AnimatePresence>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;