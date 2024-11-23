import React from 'react';
import { motion } from 'framer-motion';
import { Dice6 } from 'lucide-react';
import { DiceFace } from './DiceFace';

interface DiceRollerProps {
  onRoll: () => void;
  disabled: boolean;
  result: number | null;
}

export const DiceRoller: React.FC<DiceRollerProps> = ({ onRoll, disabled, result }) => {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <motion.button
        whileHover={{ scale: disabled ? 1 : 1.1 }}
        whileTap={{ scale: disabled ? 1 : 0.9 }}
        className={`bg-indigo-500 text-white px-6 py-4 rounded-2xl shadow-lg transition-colors flex items-center gap-3
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-600'}`}
        onClick={onRoll}
        disabled={disabled}
      >
        <Dice6 size={36} className={disabled ? '' : 'animate-bounce'} />
        <span className="text-lg font-bold">Roll the Dice!</span>
      </motion.button>
      
      {result !== null && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center gap-3 bg-white px-6 py-2 rounded-xl shadow-md"
        >
          <span className="text-2xl font-bold text-indigo-600">You rolled a {result}!</span>
          <DiceFace value={result} />
        </motion.div>
      )}
    </div>
  );
};