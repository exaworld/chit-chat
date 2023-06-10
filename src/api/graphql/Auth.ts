import { GraphQLError } from 'graphql';
import { extendType, nonNull, objectType, stringArg } from 'nexus';
const crypto = require("crypto-js");
const bcrypt = require('bcrypt');

export const Auth = objectType({
  name: 'Auth',
  definition(t) {
    t.nonNull.string('accessToken');
  },
});

export const loginMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('login', {
      type: Auth,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async(_root, { email, password }, { db, auth, res }) => {
        const user = await db.user.findFirst({ where: { email }})

        if (!user) {
            throw new GraphQLError('User not found.', {
              extensions: {
                code: 'AUTHENTICATION_FAILED'
              }
            })
        }

        const passwordDecrypt = crypto.AES.decrypt(password, email).toString(crypto.enc.Utf8);
        const isValidPassword = await bcrypt.compare(passwordDecrypt, user.password)
        if (!isValidPassword) {
            throw new GraphQLError('Invalid password.', {
              extensions: {
                code: 'AUTHENTICATION_FAILED'
              }
            })
        }

        const { accessToken, refreshToken } = auth.createAuthToken(user?.id)
        const options = {
          httpOnly: true, // cookie is only accessible by the server
          secure: true,
          sameSite: true, // only sent for requests to the same FQDN as the domain in the cookie
        }
        res.cookie('refreshToken', refreshToken, options);
        return {
            accessToken,
        };
      },
    });
  },
});
