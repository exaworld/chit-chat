export const setTokenCookies = (accessToken: string, refreshToken: string) => {
    const accessTokenExpiration = new Date();
    accessTokenExpiration.setDate(accessTokenExpiration.getDate() + 7); // Set expiration to 7 days from now
    document.cookie = `accessToken=${accessToken}; expires=${accessTokenExpiration.toUTCString()}; path=/; secure; SameSite=Strict;`;
    
    const refreshTokenExpiration = new Date();
    refreshTokenExpiration.setDate(refreshTokenExpiration.getDate() + 30); // Set expiration to 30 days from now
    document.cookie = `refreshToken=${refreshToken}; expires=${refreshTokenExpiration.toUTCString()}; path=/; secure; SameSite=Strict; HttpOnly`;
}

export const getAccessTokenFromCookie = () => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('token=')) {
        const cookieParts = cookie.split('=');
        if (cookieParts.length === 2) {
          return decodeURIComponent(cookieParts[1]);
        }
      }
    }
    return null; // Access token not found in cookies
}
  