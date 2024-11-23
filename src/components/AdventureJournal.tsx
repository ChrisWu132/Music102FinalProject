import React from 'react';
import { motion } from 'framer-motion';
import { Region } from '../types/region';
import { Book } from 'lucide-react';

interface AdventureJournalProps {
  visitedRegions: Region[];
  onRegionClick: (region: Region) => void;
}

export const AdventureJournal: React.FC<AdventureJournalProps> = ({
  visitedRegions,
  onRegionClick,
}) => {
  return (
    <div className="bg-yellow-50 rounded-3xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Book className="w-8 h-8 text-yellow-600" />
        <h2 className="text-2xl font-bold text-yellow-600">My Music Journey</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {visitedRegions.map((region) => (
          <motion.button
            key={region.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            onClick={() => onRegionClick(region)}
          >
            <div
              className="w-16 h-16 rounded-full mx-auto mb-2"
              style={{ backgroundColor: region.color }}
            />
            <p className="text-sm font-medium text-center">{region.name}</p>
            <p className="text-xs text-gray-500 text-center">{region.instrument}</p>
          </motion.button>
        ))}
      </div>
      
      {visitedRegions.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          Roll the dice to start your musical adventure!
        </p>
      )}
    </div>
  );
};