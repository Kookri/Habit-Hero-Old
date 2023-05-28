// tokenHandler.js

export const storeTokens = (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };

  
  
  export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
  };
  
  export const getRefreshToken = () => {
    return localStorage.getItem('refreshToken');
  };
  
  export const removeTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  export const tokenTest = () => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
  
    return accessToken !== null && refreshToken !== null;
  };