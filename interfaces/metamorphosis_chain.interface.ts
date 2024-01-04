import metamorphosis from './metamorphosis.interface.js';

interface metamorphosisChain {
  id?: number;
  identifier: string;
  type: string
  genotypeChange?: string
  genotypeSource?: string;
  metamorphoses?: metamorphosis[];
  updatedAt?: Date;
  createdAt?: Date;
  categoryId?: number;
  name_en?: string
  name_fi?: string
  description_en?: string
  description_fi?: string
}

export default metamorphosisChain


