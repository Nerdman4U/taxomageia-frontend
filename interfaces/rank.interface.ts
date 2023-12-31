import metamorphosisChain from './metamorphosis_chain.interface.js';

type rank = {
  id?: number;
  identifier: string;
  taxonRank: string;
  taxonParent?: string;
  description?: string;
  url?: string[];
  parentId?: number;
  categories?: rank[];
  ages?: metamorphosisChain[];
  createdAt?: Date;
  updatedAt?: Date;
  properties?: string[]
  abilities?: string[]
  taxonRanks?: any[]
  powers?: powerlist
}

type powerlist = { properties: string[], abilities: any }

export default rank

