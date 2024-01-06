import attribute from './attribute.interface.js';

export default interface divergence {
  id?: number;
  genotype_change?: string
  genotype_source?: string;
  attribute_min?: attribute;
  attribute_max?: attribute;
  attribute_growth?: attribute;
  attribute_skill?: attribute;
}
