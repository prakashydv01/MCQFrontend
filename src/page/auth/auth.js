// utils/auth.js
export const setAuthTokens = (tokens) => {
    localStorage.setItem('authTokens', JSON.stringify(tokens));
  };
  
  export const getAuthTokens = () => {
    const tokens = localStorage.getItem('authTokens');
    return tokens ? JSON.parse(tokens) : null;
  };
  
  export const removeAuthTokens = () => {
    localStorage.removeItem('authTokens');
  };
  
  export const isAuthenticated = () => {
    return !!getAuthTokens();
  };