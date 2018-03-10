
export const verifyAccountStore = (data?: any): boolean => {
  return !!(data && data.accessToken && data.accessTokenExpiresAt && data.refreshToken && data.refreshTokenExpiresAt)
}