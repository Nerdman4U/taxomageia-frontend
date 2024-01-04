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
  description_fi?: string;
  description_en?: string;
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
  etype: string,
  metamorphosis_interval: number
  metamorphosis_period: number
  existence_name: string
  existence_type: string
  metamorphosis_name: string
}

type powerlist = { properties: string[], abilities: any, inputs: string[], outputs: string[] }

export default body
