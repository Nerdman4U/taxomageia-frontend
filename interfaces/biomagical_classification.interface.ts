// eslint-disable-next-line @typescript-eslint/no-unused-vars
import taxon from './taxon.interface.js';

interface biomagicalClassification {
  id?: number;
  identifier: string;
  createdAt: Date;
  updatedAt: Date;
  taxons?: taxon[];
}

export default biomagicalClassification


