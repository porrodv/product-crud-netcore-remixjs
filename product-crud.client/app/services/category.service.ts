import axios, { AxiosResponse } from 'axios';
import { ApiModules, httpAgent, CategoryServices } from '~/constants';
import { Category } from '~/interfaces';
import { getApiUrl } from '~/utils';

export async function getAllCategories(): Promise<Category[]> {
  const response: AxiosResponse = await axios.get(
    getApiUrl(ApiModules.CATEGORY, CategoryServices.GET_ALL),
    {
      httpsAgent: httpAgent,
    },
  );
  return response.data;
}

export async function getCategoryById(id: number): Promise<Category> {
  const response: AxiosResponse = await axios.get(
    `${getApiUrl(ApiModules.CATEGORY, CategoryServices.GET_BY_ID)}/${id}`,
    {
      httpsAgent: httpAgent,
    },
  );
  return response.data;
}
