import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music } from 'lucide-react';
import { Space } from '../types/space';

interface SpaceCardProps {
  space: Space;
  onClose: () => void;
}

export const SpaceCard: React.FC<SpaceCardProps> = ({ space, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed inset-x-0 bottom-0 p-4 z-50"
      >
        <div className="bg-white rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-3" style={{ color: space.color }}>
                Welcome to {space.name}!
              </h2>
              {space.instrument && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Music className="w-6 h-6" />
                  <span className="text-xl">Featured Instrument: {space.instrument}</span>
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="space-y-6">
            <p className="text-2xl leading-relaxed">{space.description}</p>

            {space.instrument && (
              <div className="p-6 bg-indigo-50 rounded-xl">
                <p className="text-xl text-indigo-700">
                  Search online for the sound of the {space.instrument}, how do you like it?
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};