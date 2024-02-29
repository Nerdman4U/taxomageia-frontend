import bodyPart from './body_part.interface.js';

interface bodySegment {
  id?: number;
  identifier: string;
  type: string
  genotype_change?: string
  genotype_source?: string;
  percentage?: number;
  description_fi?: string;
  description_en?: string;
  updated_at?: Date;
  created_at?: Date;
  body_parts?: bodyPart[];
  body_id?: number;
  connected?: bodySegment;
  connections?: bodySegment[];
  connected_to_id?: number | undefined;
}

export default bodySegment

