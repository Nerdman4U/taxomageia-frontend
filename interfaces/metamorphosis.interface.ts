// eslint-disable-next-line @typescript-eslint/no-unused-vars
import body from './body.interface.js';

interface metamorphosis {
  id?: number;
  identifier: string;
  genotype_change?: string
  genotype_source?: string;
  interval?: number;
  period?: number;
  metamorphosis_chain_id?: number;
  bodies?: body[];
  name_en?: string
  name_fi?: string
  description_en?: string
  description_fi?: string
}

export default metamorphosis

