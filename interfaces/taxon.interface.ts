import metamorphosisChain from './metamorphosis_chain.interface.js';

type taxon = {
  id?: number;
  identifier: string;
  name_fi: string;
  name_en: string;
  taxonRank: string;
  taxonParent?: string;
  description_fi?: string;
  description_en?: string;
  url?: string[];
  parentId?: number;
  categories?: taxon[];
  existences?: metamorphosisChain[];
  createdAt?: Date;
  updatedAt?: Date;
  properties?: string[]
  abilities?: string[]
  taxonRanks?: any[]
  powers?: powerlist
}

type powerlist = { properties: string[], abilities: any }

export default taxon

