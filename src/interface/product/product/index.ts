export type ProductValues = {
  productCode: string;
  productName: string;
  description: string;
  categoryId: string;
  storeId: string;
  productThumbnail: any;
  isActive: boolean;
  priceData: ProductPriceValue[];
};

export type ProductPriceValue = {
  qty1: number;
  qty2: number;
  unitPrice: number;
};
