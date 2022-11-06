export interface product {
  id: string;
  name: string;
  inStock: boolean;
  gallery: string[];
  brand: string;
  attributes: attribute[];
}

export interface attribute {
  id: string;
  name: string;
  type: typeAttribute;
  items: item[];
}

export interface item {
  displayValue: string;
  value: string;
  id: string;
  count: number;
  prices: price[];
}

export interface price {
  currency: currency;
  amount: number;
}
export interface currency {
  label: string;
  symbol: string;
}

export type typeAttribute = 'text' | 'swatch';
