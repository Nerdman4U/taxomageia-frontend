// eslint-disable-next-line @typescript-eslint/no-unused-vars
import body from './body.interface.js';

interface metamorphosis {
  id?: number;
  identifier: string;
  genotypeChange?: string
  genotypeSource?: string;
  interval?: number;
  period?: number;
  metamorphosisChainId?: number;
  bodies?: body[];
}

export default metamorphosis