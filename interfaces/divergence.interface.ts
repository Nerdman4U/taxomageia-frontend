import attribute from './attribute.interface.js';

export default interface divergence {
  id?: number;
  genotypeChange?: string
  genotypeSource?: string;
  attributeMin?: attribute;
  attributeMax?: attribute;
  attributeGrowth?: attribute;
  attributeSkill?: attribute;
}
