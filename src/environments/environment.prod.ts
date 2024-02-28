export const environment = {
  production: true,
  ApiUrl: 'http://hrms.calibrage.in/API/hrmsapi/',
};
export const URI_ENDPOINT = (term:string) => `${environment.ApiUrl}${term}`;

