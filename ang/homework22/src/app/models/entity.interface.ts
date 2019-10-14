export interface Entity {
  id: number;
}

export interface EntityObj<T> extends Entity {
  person: T;
}