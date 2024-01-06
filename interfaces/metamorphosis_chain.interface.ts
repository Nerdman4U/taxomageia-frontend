import metamorphosis from './metamorphosis.interface.js';

interface metamorphosisChain {
  id?: number;
  identifier: string;
  type: string
  genotype_change?: string
  genotype_source?: string;
  metamorphoses?: metamorphosis[];
  updated_at?: Date;
  created_at?: Date;
  category_id?: number;
  name_en?: string
  name_fi?: string
  description_en?: string
  description_fi?: string
}

export default metamorphosisChain


