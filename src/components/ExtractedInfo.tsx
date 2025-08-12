import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Target, Lightbulb, Code, BookOpen, Zap, List } from 'lucide-react';
import { PaperData } from '../types';

interface ExtractedInfoProps {
  data: PaperData;
}

const ExtractedInfo: React.FC<ExtractedInfoProps> = ({ data }) => {
  const infoCards = [
    {
      icon: FileText,
      title: 'Title',
      content: data.title,
      bullets: [],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Abstract',
      content: data.abstract,
      bullets: data.abstractBullets,
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Problem Statement',
      content: data.problemStatement,
      bullets: data.problemBullets,
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Lightbulb,
      title: 'Proposed Solution',
      content: data.proposedSolution,
      bullets: data.solutionBullets,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Code,
      title: 'Methodology',
      content: data.methodology,
      bullets: data.methodologyBullets,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      title: 'Key Findings',
      content: data.keyFindings,
      bullets: data.findingsBullets,
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Code,
      title: 'Algorithms & Methods',
      content: data.algorithms.join(', '),
      bullets: [],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Lightbulb,
      title: 'Contributions',
      content: data.contributions,
      bullets: data.contributionsBullets,
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Zap,
      title: 'Summary',
      content: data.summary,
      bullets: data.summaryBullets,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
      >
        Extracted Insights
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {infoCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group shadow-lg hover:shadow-orange-500/20 overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-gradient-to-r ${card.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0 overflow-hidden">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed break-words overflow-wrap-anywhere">
                    {card.content}
                  </p>
                  {card.bullets && card.bullets.length > 0 && (
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <List className="w-4 h-4 text-orange-400" />
                        <span className="text-sm font-medium text-orange-400">Key Points:</span>
                      </div>
                      <ul className="space-y-1">
                        {card.bullets.map((bullet, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ExtractedInfo;