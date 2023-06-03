import { objectType, inputObjectType, extendType, arg, nonNull } from 'nexus';

export const Message = objectType({
  name: 'Message',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('body');
    t.nonNull.string('senderId');
    t.nonNull.field('sender', {
      type: 'User',
      resolve: async(parent, _args, { db }) => {
        const user = await db.user.findUnique({ where: { id: parent.senderId } })
        return user!
      },
    });
    t.nonNull.field('recipient', {
      type: 'Recipient',
      resolve: async(parent, _args, { db }) => {
        const recipient = await db.recipient.findUnique({ where: { messageId: parent.id } });
        return recipient!
      },
    });
    t.date('sentAt');
  },
});

export const MessageCreateInput = inputObjectType({
  name: 'MessageCreateInput',
  definition(t) {
    t.nonNull.string('body');
    t.nonNull.string('senderId');
    t.string('replyToMessageId');
    t.nonNull.field('recipient', { type: 'RecipientCreateInput' });
  },
});

export const MessageWhereUniqueInput = inputObjectType({
  name: 'MessageWhereUniqueInput',
  definition(t) {
    t.nonNull.string('id');
  },
});

export const MessageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('messages', {
      type: 'Message',
      resolve: async(_root, _args, { db }) => {
        return await db.message.findMany();
      },
    });

    t.field('message', {
      type: 'Message',
      args: {
        where: nonNull('MessageWhereUniqueInput'),
      },
      resolve: async(_root, { where }, { db }) => {
        return await db.message.findUnique({ where });
      },
    });
  },
});

export const MessageMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createMessage', {
      type: 'Message',
      args: {
        data: nonNull(MessageCreateInput),
      },
      resolve: async(_root, { data }, { db }) => {
        const { recipient, ...messageData } = data;
        return db.message.create({
          data: {
            ...messageData,
            recipient: {
              create: recipient,
            },
          },
        });
      },
    });

    t.field('deleteMessage', {
      type: 'Message',
      args: {
        where: nonNull(arg({ type: 'MessageWhereUniqueInput' })),
      },
      resolve(_root, { where }, { db }) {
        return db.message.delete({ where });
      },
    });
  },
});
