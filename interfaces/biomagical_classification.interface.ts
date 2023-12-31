// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { rank } from './rank.interface.js';

interface biomagicalClassification {
  id?: number;
  identifier: string;
  createdAt: Date;
  updatedAt: Date;
  ranks?: rank[];
}

export default biomagicalClassification