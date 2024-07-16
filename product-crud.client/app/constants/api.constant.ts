import https from 'https';

export enum ApiModules {
  PRODUCT = 'product',
  CATEGORY = 'category',
}

export enum ProductServices {
  GET_ALL = 'all',
  GET_BY_ID = '',
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

export enum CategoryServices {
  GET_ALL = 'all',
  GET_BY_ID = '',
}

// For development
export const httpAgent = new https.Agent({
  rejectUnauthorized: false,
  requestCert: false,
});
