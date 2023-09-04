/* eslint-disable @typescript-eslint/no-explicit-any */
export type AxiosErrorType = {
  response?: {
    data: {
      message: string,
      [key: string]: any // other possible properties in the error response
    };
    status: number;
    headers: any;
    statusText: string;
  };
  request?: any;
  message: string;
  config: any;
};
