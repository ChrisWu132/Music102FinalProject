import React from 'react';
import { motion } from 'framer-motion';
import { Space } from '../types/space';
import { spaces } from '../data/spaces';
import { Music } from 'lucide-react';

interface GameBoardProps {
  selectedSpace: Space | null;
  currentPosition: number;
  animatingPosition: number | null;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  selectedSpace,
  currentPosition,
  animatingPosition,
}) => {
  const BOARD_SIZE = {
    width: 7,
    height: 5
  };

  const calculatePosition = (position: number) => {
    const spaceWidth = `${100 / BOARD_SIZE.width}%`;
    const spaceHeight = `${100 / BOARD_SIZE.height}%`;
    
    let x = 0;
    let y = 0;

    if (position < BOARD_SIZE.width) {
      // Top row
      x = position;
      y = 0;
    } else if (position < BOARD_SIZE.width + BOARD_SIZE.height - 1) {
      // Right column
      x = BOARD_SIZE.width - 1;
      y = position - BOARD_SIZE.width + 1;
    } else if (position < BOARD_SIZE.width * 2 + BOARD_SIZE.height - 2) {
      // Bottom row (reverse direction)
      x = BOARD_SIZE.width - 1 - (position - (BOARD_SIZE.width + BOARD_SIZE.height - 1));
      y = BOARD_SIZE.height - 1;
    } else {
      // Left column (reverse direction)
      x = 0;
      y = BOARD_SIZE.height - 1 - (position - (BOARD_SIZE.width * 2 + BOARD_SIZE.height - 2));
    }

    return { 
      x: `${(x / BOARD_SIZE.width) * 100}%`, 
      y: `${(y / BOARD_SIZE.height) * 100}%`,
      width: spaceWidth,
      height: spaceHeight
    };
  };

  return (
    <div className="game-board-container relative bg-blue-50 rounded-3xl p-4 overflow-hidden shadow-xl mx-auto">
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="w-full h-full max-w-md relative">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
            alt="Musical instruments"
            className="w-full h-full object-cover rounded-2xl opacity-10"
          />
          <Music className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-indigo-600/40" />
        </div>
      </div>
      
      {spaces.map((space) => {
        const { x, y, width, height } = calculatePosition(space.position);
        const isCurrentSpace = currentPosition === space.position;
        const isAnimatingSpace = animatingPosition === space.position;
        
        return (
          <motion.div
            key={space.id}
            className="absolute p-2"
            style={{
              left: x,
              top: y,
              width,
              height
            }}
            animate={{
              scale: selectedSpace?.id === space.id ? 1.1 : 1,
              zIndex: selectedSpace?.id === space.id ? 10 : 1,
            }}
          >
            <div
              className={`game-space rounded-xl flex items-center justify-center shadow-lg
                ${isAnimatingSpace ? 'ring-4 ring-yellow-400' : ''}`}
              style={{ backgroundColor: space.color }}
            >
              <span className="text-white font-bold text-center p-2 leading-tight text-sm sm:text-base lg:text-lg">
                {space.name}
              </span>
              {(isCurrentSpace || isAnimatingSpace) && (
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};