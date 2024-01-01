import bodySegment from './body_segment.interface.js';
import size from './size.interface.js';
import attribute from './attribute.interface.js';
import divergence from './divergence.interface.js';

interface body {
  id?: number;
  identifier: string;
  type: string
  materia: string
  genotypeChange?: string
  genotypeSource?: string;
  description?: string;
  updatedAt?: Date;
  createdAt?: Date;
  skills?: attribute[] | [];
  mins?: attribute[] | [];
  maxes?: attribute[] | [];
  growths?: attribute[] | [];
  bodySegments?: bodySegment[];
  locomotion?: string
  diet?: string
  reproduction?: string
  size?: size;
  powers: powerlist;
  center?: string
  centerSides?: number
  centerSegments?: string[]
}

type powerlist = { properties: string[], abilities: any, inputs: string[], outputs: string[] }

export default body
