export type version = {
  version: string;
  features?: string[];
  issues?: string[];
  changes?: string[];
  fixed?: string[];
  next?: string[];
  notes?: string[];
};
export type template = {
  name: string;
  current: string;
  description: string;
  licence: string;
  versions: version[];
};
export type code = {
  current: string;
  versions: version[];
};
export type codenames = {
  name: string;
  type: string;
  date: string;
  backend: number;
  frontend: number;
  description: string;
};
export type release_notes = {
  frontend: code;
  backend: code;
  data: template[];
  codenames: any[];
};
