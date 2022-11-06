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
  prices: price[];
}

export interface item {
  displayValue: string;
  value: string;
  id: string;
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
