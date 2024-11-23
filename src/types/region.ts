export interface Region {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  videoLink: string;
  audioClip: string;
  color: string;
  instrument: string;
  coordinates: {
    x: number;
    y: number;
  };
}