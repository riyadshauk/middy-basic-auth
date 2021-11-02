import middy from "@middy/core";

/**
 * @description a super minimal middy middleware for basic authentication
 * @param realUsername the actual username to verify against the supplied one
 * @param realPassword the actual password to verify against the supplied one
 * @returns a middy middleware object with a before function which returns undefined iff authorized, else a 401 statusCode
 */
export default (realUsername: string, realPassword: string) => ({
  before: ({ event: { headers } }: middy.Request) => {
    try {
      const auth = headers.authorization || headers.Authorization;
      const [username, password] = Buffer.from(auth.split(' ')[1], 'base64').toString('utf8').split(':');
      return (username !== realUsername || password !== realPassword) ?
        { statusCode: 401 } : undefined;
    } catch {
      return { statusCode: 401 };
    }
  },
});