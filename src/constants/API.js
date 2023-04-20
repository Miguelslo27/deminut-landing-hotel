const getApiUrl = () => {
  console.log(`NODE_ENV`, process.env.NODE_ENV);

  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:3000/v1`;
  }
  return `https://api.staging.deminut.com/v1`;
}
export const API_URL = getApiUrl();
