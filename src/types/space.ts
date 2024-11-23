export type SpaceType = 'location' | 'special';

export interface Space {
  id: string;
  type: SpaceType;
  name: string;
  description: string;
  color: string;
  instrument?: string;
  position: number;
}