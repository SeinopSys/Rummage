export type Nullable<T> = T | null;
/** Allows making all or a selected subset of properties of an object nullable */
export type NullableProps<T, K extends keyof T = keyof T> = Omit<T, K> &
  {
    [P in K]: Nullable<T[P]>;
  };
export type Optional<T> = T | undefined | void;
export type OptionalProps<T, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
/** Can be used in place of `number` to avoid having to do explicit type casting */
export type Numeric = number | string;
export type ValuesOf<T> = T[keyof T];

export interface ObjectOf<T> {
  [key: string]: T;
}
