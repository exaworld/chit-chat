import { extendType, nonNull, objectType, stringArg } from 'nexus';
const bcrypt = require('bcrypt');

export const Auth = objectType({
  name: 'Auth',
  definition(t) {
    t.nonNull.string('accessToken');
    t.nonNull.string('refreshToken');
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
      resolve: async(_root, { email, password }, { db, auth }) => {
        const user = await db.user.findFirst({ where: { email }})

        if (!user) {
            throw new Error('User not found.')
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            throw new Error('Invalid password.')
        }

        const { accessToken, refreshToken } = auth.createAuthToken(user?.id)
        return {
            accessToken,
            refreshToken
        };
      },
    });
  },
});
