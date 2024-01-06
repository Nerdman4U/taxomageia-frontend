interface bodyPart {
  id?: number;
  identifier: string;
  type: string;
  genotype_change?: string;
  genotype_source?: string;
  description_fi?: string;
  description_en?: string;
  toughness?: number;
  location?: string
  created_at?: Date;
  updated_at?: Date;
  organs?: bodyPart[];
  parent_id?: number;
  body_segment_id?: number;
  properties?: string[]
  abilities?: string[]
}

export default bodyPart