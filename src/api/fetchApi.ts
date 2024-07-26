import { APIResponseInterface } from '../interface/apiResponse.interface';

export const fetchApi = async (credential: string): Promise<APIResponseInterface> => {
  const BACK_END_URL = import.meta.env.VITE_BACK_URL;

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${credential}`,
    },
  };

  const response = await fetch(`${BACK_END_URL}/login-google`, fetchOptions);

  const data: APIResponseInterface = await response.json();
  return data;
};
