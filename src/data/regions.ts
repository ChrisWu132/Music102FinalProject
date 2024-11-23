import { Region } from '../types/region';

export const regions: Region[] = [
  {
    id: 'west_africa',
    name: 'West Africa',
    description: 'West African music is full of energy and rhythm. It is often made for dancing and tells stories about life and nature. People play drums a lot in West Africa, especially during celebrations. Music is also used to bring communities together. The singing in West African music often has a "call and response" style, where one person sings, and others answer.',
    imageUrl: 'https://images.unsplash.com/photo-1516814537483-797cf05b8ce7',
    videoLink: 'https://www.youtube.com/embed/0iCjocyZsJE',
    audioClip: '/audio/west-africa.mp3',
    color: '#FFB347',
    instrument: 'Kora',
    coordinates: { x: 45, y: 45 }
  },
  {
    id: 'india',
    name: 'India',
    description: 'Indian music has a very long history and is very important to the culture. There are two main types of classical music: Hindustani from the north and Carnatic from the south. Both styles use ragas, which are special musical patterns, and talas, which are rhythms. Indian music is often connected to nature and emotions, and people love singing and playing instruments at festivals and weddings.',
    imageUrl: 'https://images.unsplash.com/photo-1545063914-a1a6ec821c88',
    videoLink: 'https://www.youtube.com/embed/gMg4X7UzYzs',
    audioClip: '/audio/india.mp3',
    color: '#FF7F50',
    instrument: 'Sitar',
    coordinates: { x: 70, y: 40 }
  },
  {
    id: 'ireland',
    name: 'Ireland',
    description: 'Ireland is known for its lively and cheerful music, often played in pubs and at festivals. Irish music includes songs about history, love, and nature. People often play fast tunes for traditional dances like jigs and reels. The melodies make you want to tap your feet or clap along. The fiddle and tin whistle are popular instruments.',
    imageUrl: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e',
    videoLink: 'https://www.youtube.com/embed/example',
    audioClip: '/audio/ireland.mp3',
    color: '#66BB6A',
    instrument: 'Fiddle',
    coordinates: { x: 40, y: 25 }
  },
  {
    id: 'korea',
    name: 'Korea',
    description: 'Korean music has a mix of traditional and modern styles. Traditional Korean music, called gugak, includes soft melodies and slow rhythms. It is often performed during festivals and ceremonies. A special instrument from Korea is the gayageum, a string instrument with 12 or more strings. Players pluck the strings with their fingers to create gentle, flowing sounds. The gayageum is used in both traditional music and modern experiments with Korean music.',
    imageUrl: 'https://images.unsplash.com/photo-example-korea',
    videoLink: 'https://www.youtube.com/embed/example',
    audioClip: '/audio/korea.mp3',
    color: '#AB47BC',
    instrument: 'Gayageum',
    coordinates: { x: 80, y: 35 }
  },
  // Add more regions as needed
];