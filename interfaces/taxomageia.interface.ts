// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as taxon from './taxon.interface.js';

interface saved {
  id: number;
  identifier: string;
  created_at: Date;
  updated_at: Date;
  taxons: taxon.saved[];
}

interface about_to_save {
  id?: number;
  identifier: string;
  created_at: Date;
  updated_at: Date;
  taxons?: taxon.about_to_save[];
}

interface building_up {
  id?: number;
  identifier?: string;
  created_at?: Date;
  updated_at?: Date;
  taxons?: taxon.building_up[];
}

export type { 
  saved,
  about_to_save,
  building_up
}


