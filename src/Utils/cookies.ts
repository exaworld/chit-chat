export const setTokenCookies = (accessToken: string) => {
    const accessTokenExpiration = new Date();
    accessTokenExpiration.setDate(accessTokenExpiration.getDate() + 7); // Set expiration to 7 days from now
    document.cookie = `accessToken=${accessToken}; expires=${accessTokenExpiration.toUTCString()}; path=/; secure; SameSite=Strict;`;
}

export const parseCookie = (cookie: string) =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc: any, v) => {
      try {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      } catch {
        return {};
      }
    }, {});

  