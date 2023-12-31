interface size {
  id?: number;
  identifier: string;
  genotypeChange?: string
  genotypeSource?: string;
  widthMin?: number;
  widthMax?: number;
  widthMinUnit?: string;
  widthMaxUnit?: string;
  heightMin?: number;
  heightMax?: number;
  heightMinUnit?: string;
  heightMaxUnit?: string;
  weightMin?: number;
  weightMax?: number;
  weightMinUnit?: string;
  weightMaxUnit?: string;
  bodyId?: number;
  updatedAt?: Date;
  createdAt?: Date;
}

export default size
