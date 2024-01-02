interface bodyPart {
  id?: number;
  identifier: string;
  type: string;
  genotypeChange?: string;
  genotypeSource?: string;
  description_fi?: string;
  description_en?: string;
  toughness?: number;
  location?: string
  createdAt?: Date;
  updatedAt?: Date;
  organs?: bodyPart[];
  parentId?: number;
  bodySegmentId?: number;
  properties?: string[]
  abilities?: string[]
}

export default bodyPart