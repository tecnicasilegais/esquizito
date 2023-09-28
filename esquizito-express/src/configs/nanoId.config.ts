import * as nanoid from 'nanoid';

export const getId = nanoid.customAlphabet(
  '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  5,
);
