import { objectType, inputObjectType, extendType, arg, nonNull, nullable } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('username');
    t.nonNull.string('email');
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
  },
});

export const UserCreateInput = inputObjectType({
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.string('username');
    t.nonNull.string('email');
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
    t.nonNull.string('password');
  },
});

export const UserUpdateInput = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.string('username');
    t.string('firstName');
    t.string('lastName');
  },
});

export const UserWhereUniqueIdInput = inputObjectType({
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.nonNull.string('id');
  },
});

export const UserWhereInput = inputObjectType({
  name: 'UserWhereInput',
  definition(t) {
    t.string('id');
    t.string('username');
    t.string('email');
    t.string('firstName');
    t.string('lastName');
  },
});

export const Query = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve: async(_root, _args, { db }) => {
        return await db.user.findMany();
      },
    });

    t.field('user', {
        type: 'User',
        args: {
          where: nonNull(UserWhereUniqueIdInput)
        },
        resolve: async(_root, { where }, { db }) => {
          return await db.user.findUnique({ where });
        },
    });
  },
});

export const Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createUser', {
      type: 'User',
      args: {
        data: nonNull(UserCreateInput),
      },
      resolve(_root, { data }, { db }) {
        return db.user.create({ data });
      },
    });

    t.field('updateUser', {
      type: 'User',
      args: {
        where: nonNull(UserWhereUniqueIdInput),
        data: nonNull(UserUpdateInput),
      },
      resolve(_root, { where, data }, { db }) {
        const { username, firstName, lastName } = data;
        const updatedData = {
          username: username !== null ? username : undefined,
          firstName: firstName !== null ? firstName : undefined,
          lastName: lastName !== null ? lastName : undefined,
        };
        return db.user.update({ where, data: updatedData });
      },
    });
  },
});
