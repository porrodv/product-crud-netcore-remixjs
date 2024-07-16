import axios, { AxiosResponse } from 'axios';
import { ApiModules, httpAgent, ProductServices } from '~/constants';
import { CreateProduct, Product, UpdateProduct } from '~/interfaces';
import { getApiUrl } from '~/utils';

export async function getAllProducts(): Promise<Product[]> {
  const response: AxiosResponse = await axios.get(
    getApiUrl(ApiModules.PRODUCT, ProductServices.GET_ALL),
    {
      httpsAgent: httpAgent,
    },
  );
  return response.data;
}

export async function getProductById(id: number): Promise<Product> {
  const response: AxiosResponse = await axios.get(
    `${getApiUrl(ApiModules.PRODUCT, ProductServices.GET_BY_ID)}/${id}`,
    {
      httpsAgent: httpAgent,
    },
  );
  return response.data;
}

export async function createProduct(
  newProduct: CreateProduct,
): Promise<Product> {
  const response: AxiosResponse = await axios.post(
    getApiUrl(ApiModules.PRODUCT, ProductServices.CREATE),
    newProduct,
    {
      httpsAgent: httpAgent,
    },
  );
  return response.data;
}

export async function updateProduct(
  id: number,
  newProduct: UpdateProduct,
): Promise<Product> {
  const response: AxiosResponse = await axios.put(
    `${getApiUrl(ApiModules.PRODUCT, ProductServices.UPDATE)}/${id}`,
    newProduct,
    {
      httpsAgent: httpAgent,
    },
  );

  return response.data;
}

export async function deleteProduct(id: number) {
  const response: AxiosResponse = await axios.delete(
    `${getApiUrl(ApiModules.PRODUCT, ProductServices.DELETE)}/${id}`,
    { httpAgent: httpAgent },
  );
  return response.data;
}
