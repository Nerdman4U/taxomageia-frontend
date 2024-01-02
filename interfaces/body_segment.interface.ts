import bodyPart from './body_part.interface.js';

interface bodySegment {
  id?: number;
  identifier: string;
  type: string
  genotypeChange?: string
  genotypeSource?: string;
  percentage?: number;
  description_fi?: string;
  description_en?: string;
  updatedAt?: Date;
  createdAt?: Date;
  bodyParts?: bodyPart[];
  bodyId?: number;
  connected?: bodySegment;
  connections?: bodySegment[];
  connectedToId?: number | undefined;
}

export default bodySegment

