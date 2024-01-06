import bodySegment from './body_segment.interface.js';
import size from './size.interface.js';
import attribute from './attribute.interface.js';
import divergence from './divergence.interface.js';

interface body {
  id?: number;
  identifier: string;
  type: string
  materia: string
  genotype_change?: string
  genotype_source?: string;
  description_fi?: string;
  description_en?: string;
  updated_at?: Date;
  created_at?: Date;
  skills?: attribute[] | [];
  mins?: attribute[] | [];
  maxes?: attribute[] | [];
  growths?: attribute[] | [];
  body_segments?: bodySegment[];
  locomotion?: string
  diet?: string
  reproduction?: string
  size?: size;
  powers: powerlist;
  center?: string
  center_sides?: number
  center_segments?: string[]
  etype: string,
  metamorphosis_interval: number
  metamorphosis_period: number
  existence_name: string
  existence_type: string
  metamorphosis_name: string
}

type powerlist = { properties: string[], abilities: any, inputs: string[], outputs: string[] }

export default body
