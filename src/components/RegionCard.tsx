import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, Youtube } from 'lucide-react';
import { Region } from '../types/region';

interface RegionCardProps {
  region: Region;
  onClose: () => void;
}

export const RegionCard: React.FC<RegionCardProps> = ({ region, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 z-50"
      >
        <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold text-indigo-600">{region.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <img
            src={region.imageUrl}
            alt={region.name}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />

          <p className="text-lg mb-6">{region.description}</p>

          <div className="flex gap-4">
            <button
              className="flex-1 bg-red-500 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
              onClick={() => window.open(region.videoLink, '_blank')}
            >
              <Youtube />
              Watch Video
            </button>
            <button
              className="flex-1 bg-purple-500 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-600 transition-colors"
            >
              <Music />
              Play Music
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};