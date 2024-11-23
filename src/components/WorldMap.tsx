import React from 'react';
import { motion } from 'framer-motion';
import { Region } from '../types/region';
import { regions } from '../data/regions';

interface WorldMapProps {
  selectedRegion: Region | null;
  onRegionSelect: (region: Region) => void;
}

export const WorldMap: React.FC<WorldMapProps> = ({ selectedRegion, onRegionSelect }) => {
  return (
    <div className="relative w-full h-[500px] bg-blue-100 rounded-3xl overflow-hidden">
      {regions.map((region) => (
        <motion.div
          key={region.id}
          className="absolute cursor-pointer"
          style={{
            left: `${region.coordinates.x}%`,
            top: `${region.coordinates.y}%`,
          }}
          whileHover={{ scale: 1.1 }}
          animate={{
            scale: selectedRegion?.id === region.id ? 1.2 : 1,
            backgroundColor: region.color,
          }}
          onClick={() => onRegionSelect(region)}
        >
          <div 
            className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg
              ${selectedRegion?.id === region.id ? 'ring-4 ring-yellow-400' : ''}`}
            style={{ backgroundColor: region.color }}
          >
            <span className="text-white font-bold text-sm text-center p-2">
              {region.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};