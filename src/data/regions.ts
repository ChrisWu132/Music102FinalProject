import { Region } from '../types/region';

export const regions: Region[] = [
  {
    id: 'west_africa',
    name: 'West Africa',
    description: 'Home to the amazing djembe drum! People gather to play music and dance together in big celebrations.',
    imageUrl: 'https://images.unsplash.com/photo-1516814537483-797cf05b8ce7',
    videoLink: 'https://www.youtube.com/embed/0iCjocyZsJE',
    audioClip: '/audio/west-africa.mp3',
    color: '#FFB347',
    instrument: 'Djembe Drum',
    coordinates: { x: 45, y: 45 }
  },
  {
    id: 'india',
    name: 'India',
    description: 'Listen to the magical sounds of the sitar! Indian music tells beautiful stories through melody and rhythm.',
    imageUrl: 'https://images.unsplash.com/photo-1545063914-a1a6ec821c88',
    videoLink: 'https://www.youtube.com/embed/gMg4X7UzYzs',
    audioClip: '/audio/india.mp3',
    color: '#FF7F50',
    instrument: 'Sitar',
    coordinates: { x: 70, y: 40 }
  },
  // Add more regions as needed
];