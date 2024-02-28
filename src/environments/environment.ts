
export const environment = {
  production: false,
  ApiUrl: 'https://localhost:7215/hrmsapi/',
};
export const URI_ENDPOINT = (term:string) => `${environment.ApiUrl}${term}`;
