export enum FilterType {
  IN = 0,
  EQUALS,
}

export interface Filter<T, K extends keyof T> {
  field: K;
  value: T[K] | T[K][];
  type: FilterType;
}

export function createFilter<T>(
  field: keyof T,
  value: T[keyof T],
  type: FilterType,
): Filter<T, keyof T> {
  return {
    field,
    value,
    type,
  };
}
