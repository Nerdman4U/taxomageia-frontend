interface size {
  id?: number;
  identifier: string;
  genotype_change?: string
  genotype_source?: string;
  width_min?: number;
  width_max?: number;
  width_min_unit?: string;
  width_max_unit?: string;
  height_min?: number;
  height_max?: number;
  height_min_unit?: string;
  height_max_unit?: string;
  weight_min?: number;
  weight_max?: number;
  weight_min_unit?: string;
  weight_max_unit?: string;
  body_id?: number;
  updated_at?: Date;
  created_at?: Date;
}

export default size
