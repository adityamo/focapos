export type ProductValues = {
  productCode: string;
  productName: string;
  description: string;
  category_id: any;
  store_id: number;
  isActive: boolean;
  priceData: ProductPriceValue[];
};

export type ProductPriceValue = {
  qty1: number;
  qty2: number;
  unitPrice: number;
};
