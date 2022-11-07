export interface product {
  id: string;
  name: string;
  inStock: boolean;
  gallery: string[];
  brand: string;
  attributes: attribute[];
  prices: price[];
  count: number;
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

export interface state {
  items: product[];
  total: {
    count: number;
    cost: number;
    tax: number;
    total: number;
  };
  indexSelectedCurrency: number;
  symbol: string;
}
