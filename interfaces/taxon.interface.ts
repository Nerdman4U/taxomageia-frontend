import metamorphosisChain from './metamorphosis_chain.interface.js';

type taxon = {
  id?: number;
  identifier: string;
  name_fi: string;
  name_en: string;
  taxon_rank: string;
  taxon_parent?: string;
  description_fi?: string;
  description_en?: string;
  url?: string[];
  parent_id?: number;
  categories?: taxon[];
  existences?: metamorphosisChain[];
  created_at?: Date;
  updated_at?: Date;
  properties?: string[]
  abilities?: string[]
  taxon_ranks?: any[]
  powers?: powerlist
}

type powerlist = { properties: string[], abilities: any }

export default taxon

