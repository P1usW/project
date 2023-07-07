const baseURL = 'https://api.github.com';
const axiosConfig = {
  method: 'get',
  baseURL,
  timeout: 3000,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  },
}


export {
  baseURL,
  axiosConfig
}