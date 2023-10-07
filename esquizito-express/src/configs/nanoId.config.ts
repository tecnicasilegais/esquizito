import * as nanoid from 'nanoid';

export const nanoIdConfig = {
  alphabet: '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  size: 5,
};

export const getId = nanoid.customAlphabet(
  nanoIdConfig.alphabet,
  nanoIdConfig.size,
);
