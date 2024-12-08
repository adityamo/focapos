export type ProductValues = {
  productCode: string;
  productName: string;
  description: string;
  category_id: number;
  store_id: string;
  productThumbnail: any;
  isActive: boolean;
  priceData: ProductPriceValue[];
};

export type ProductPriceValue = {
  qty1: number;
  qty2: number;
  unitPrice: number;
};
