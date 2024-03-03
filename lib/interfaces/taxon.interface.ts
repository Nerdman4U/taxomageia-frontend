import existence from './existence.interface.js';
import metamorphosisChain from './existence.interface.js';

interface saved extends about_to_save {
  id: number;
  identifier: string;
}
interface about_to_save extends building_up {
  identifier: string;
  name_fi: string;
  name_en: string;
  taxon_rank: string;
}
type building_up = {
  id?: number;
  identifier?: string;
  name_fi?: string;
  name_en?: string;
  taxon_rank?: string;
  taxon_parent?: string;
  description_fi?: string;
  description_en?: string;
  urls?: string[];
  parent_id?: number;
  existences?: existence[];
  created_at?: Date;
  updated_at?: Date;
  properties?: string[]
  abilities?: string[]
  taxon_ranks?: any[]
  powers?: powerlist
}

type powerlist = { properties: string[], abilities: any }

export type {
  saved,
  about_to_save,
  building_up,
  powerlist
}
