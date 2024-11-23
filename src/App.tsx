import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DiceRoller } from './components/DiceRoller';
import { GameBoard } from './components/GameBoard';
import { SpaceCard } from './components/SpaceCard';
import { Space } from './types/space';
import { spaces } from './data/spaces';
import { Music } from 'lucide-react';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [animatingPosition, setAnimatingPosition] = useState<number | null>(null);

  const moveOneStep = (from: number, to: number) => {
    if (from === to) {
      setAnimatingPosition(null);
      const space = spaces.find(s => s.position === to);
      setTimeout(() => {
        setIsRolling(false);
        if (space) {
          setSelectedSpace(space);
        }
      }, 1000);
      return;
    }

    const nextPosition = (from + 1) % spaces.length;
    setAnimatingPosition(nextPosition);
    setCurrentPosition(nextPosition);

    setTimeout(() => {
      moveOneStep(nextPosition, to);
    }, 300);
  };

  const handleDiceRoll = () => {
    if (isRolling) return;
    
    setIsRolling(true);
    setSelectedSpace(null);
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceResult(roll);
    
    const newPosition = (currentPosition + roll) % spaces.length;
    
    setTimeout(() => {
      setAnimatingPosition(currentPosition);
      moveOneStep(currentPosition, newPosition);
    }, 500);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-6 pb-24">
        <header className="max-w-[1400px] mx-auto mb-8">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-center gap-3"
            >
              <Music className="w-12 h-12 text-indigo-600" />
              <h1 className="text-4xl font-bold text-indigo-600">
                Music World Journey for Kids
              </h1>
            </motion.div>
            <DiceRoller 
              onRoll={handleDiceRoll} 
              disabled={isRolling} 
              result={diceResult}
            />
          </div>
        </header>

        <main className="max-w-[1400px] mx-auto">
          <GameBoard
            selectedSpace={selectedSpace}
            currentPosition={currentPosition}
            animatingPosition={animatingPosition}
          />

          {selectedSpace && (
            <SpaceCard
              space={selectedSpace}
              onClose={() => setSelectedSpace(null)}
            />
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;