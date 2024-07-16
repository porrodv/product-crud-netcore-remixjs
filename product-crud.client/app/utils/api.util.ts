import { ApiModules } from '~/constants';

export const getApiUrl = (module: ApiModules, endpoint: string): string => {
  const PROT = process.env.API_PROT;
  const HOST = process.env.API_HOST;
  const PORT = process.env.API_PORT;
  const PATH = process.env.API_PATH;

  console.log(
    `${PROT}://${HOST}${PORT !== '' ? ':' + PORT : ''}/${PATH}/${module}${
      endpoint !== '' ? '/' + endpoint : ''
    }`,
  );
  return `${PROT}://${HOST}${PORT !== '' ? ':' + PORT : ''}/${PATH}/${module}${
    endpoint !== '' ? '/' + endpoint : ''
  }`;
};
