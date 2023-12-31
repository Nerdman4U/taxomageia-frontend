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
}

export default metamorphosisChain