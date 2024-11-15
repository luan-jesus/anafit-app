export type ResponseTO<T> = {
  data: T;
  erros: string[];
  links: string[];
}

export type Page<T> = {
  content: T[];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  size: number;
}

export type Pageable = {
  page : number;
  size : number;
  sort : string;
}
