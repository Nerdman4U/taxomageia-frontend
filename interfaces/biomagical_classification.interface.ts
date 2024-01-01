// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { rank } from './taxon.interface.js';

interface biomagicalClassification {
  id?: number;
  identifier: string;
  createdAt: Date;
  updatedAt: Date;
  ranks?: rank[];
}

export default biomagicalClassification