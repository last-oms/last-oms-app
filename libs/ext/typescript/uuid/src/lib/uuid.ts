import { validate, v4 as uuid } from 'uuid';
import { Opaque } from 'type-fest';

export type UUID = Opaque<string, 'UUID'>;

export const UUID = {
  create: () => uuid() as UUID,
  validate: (v: string): v is UUID => validate(v),
};
