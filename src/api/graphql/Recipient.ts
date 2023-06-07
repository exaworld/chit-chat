import { objectType, inputObjectType, extendType, nonNull } from 'nexus';

export const Recipient = objectType({
  name: 'Recipient',
  definition(t) {
    t.nonNull.string('id');
    t.string('userId');
    t.string('groupId');
    t.nonNull.string('messageId');
    t.nonNull.field('message', {
      type: 'Message',
      resolve: async(parent, _args, { db }) => {
        const message = await db.message.findUnique({
          where: { id: parent.messageId! },
        });
        return message!
      },
    });
    t.nonNull.field('user', {
      type: 'User',
      resolve: async(parent, _args, { db }) => {
        const user = await db.user.findUnique({
          where: { id: parent.userId! },
        });
        return user!
      },
    });
    t.boolean('recipientKeep');
  },
});

export const RecipientCreateInput = inputObjectType({
  name: 'RecipientCreateInput',
  definition(t) {
    t.nonNull.string('userId');
    t.string('groupId', { default: null });
  },
});

export const RecipientWhereUniqueInput = inputObjectType({
  name: 'RecipientWhereUniqueInput',
  definition(t) {
    t.nonNull.string('id');
  },
});

export const RecipientQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('recipients', {
      type: 'Recipient',
      resolve(_root, _args, { db }) {
        return db.recipient.findMany();
      },
    });

    t.field('recipient', {
      type: 'Recipient',
      args: {
        where: nonNull('RecipientWhereUniqueInput'),
      },
      resolve(_root, { where }, { db }) {
        return db.recipient.findUnique({ where });
      },
    });
  },
});
