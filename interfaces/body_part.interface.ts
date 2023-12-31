interface bodyPart {
  id?: number;
  identifier: string;
  type: string
  genotypeChange?: string
  genotypeSource?: string | undefined;
  description?: string | undefined;
  toughness?: number | undefined;
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