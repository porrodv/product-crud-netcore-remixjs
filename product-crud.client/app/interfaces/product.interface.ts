export interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  categoryName: string;
}

export interface CreateProduct {
  name: string;
  price: number;
  categoryId: number;
}

export interface UpdateProduct extends Partial<CreateProduct> {}
