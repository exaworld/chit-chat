/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  MessageCreateInput: { // input type
    body: string; // String!
    recipient: NexusGenInputs['RecipientCreateInput']; // RecipientCreateInput!
    replyToMessageId?: string | null; // String
    senderId: string; // String!
  }
  MessageWhereUniqueInput: { // input type
    id: string; // String!
  }
  RecipientCreateInput: { // input type
    groupId?: string | null; // String
    userId: string; // String!
  }
  RecipientWhereUniqueInput: { // input type
    id: string; // String!
  }
  UserCreateInput: { // input type
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
    password: string; // String!
    passwordConfirmation: string; // String!
    username: string; // String!
  }
  UserUpdateInput: { // input type
    firstName?: string | null; // String
    lastName?: string | null; // String
    username?: string | null; // String
  }
  UserWhereInput: { // input type
    email?: string | null; // String
    firstName?: string | null; // String
    id?: string | null; // String
    lastName?: string | null; // String
    username?: string | null; // String
  }
  UserWhereUniqueInput: { // input type
    id: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
}

export interface NexusGenObjects {
  Auth: { // root type
    accessToken: string; // String!
    refreshToken: string; // String!
  }
  Message: { // root type
    body: string; // String!
    id: string; // String!
    senderId: string; // String!
    sentAt?: NexusGenScalars['Date'] | null; // Date
  }
  Mutation: {};
  Query: {};
  Recipient: { // root type
    groupId?: string | null; // String
    id: string; // String!
    messageId: string; // String!
    recipientKeep?: boolean | null; // Boolean
    userId?: string | null; // String
  }
  User: { // root type
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    username: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Auth: { // field return type
    accessToken: string; // String!
    refreshToken: string; // String!
  }
  Message: { // field return type
    body: string; // String!
    id: string; // String!
    recipient: NexusGenRootTypes['Recipient']; // Recipient!
    sender: NexusGenRootTypes['User']; // User!
    senderId: string; // String!
    sentAt: NexusGenScalars['Date'] | null; // Date
  }
  Mutation: { // field return type
    createMessage: NexusGenRootTypes['Message'] | null; // Message
    createUser: NexusGenRootTypes['User'] | null; // User
    deleteMessage: NexusGenRootTypes['Message'] | null; // Message
    login: NexusGenRootTypes['Auth']; // Auth!
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    message: NexusGenRootTypes['Message'] | null; // Message
    messages: Array<NexusGenRootTypes['Message'] | null> | null; // [Message]
    recipient: NexusGenRootTypes['Recipient'] | null; // Recipient
    recipients: Array<NexusGenRootTypes['Recipient'] | null> | null; // [Recipient]
    user: NexusGenRootTypes['User'] | null; // User
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  Recipient: { // field return type
    groupId: string | null; // String
    id: string; // String!
    message: NexusGenRootTypes['Message']; // Message!
    messageId: string; // String!
    recipientKeep: boolean | null; // Boolean
    user: NexusGenRootTypes['User']; // User!
    userId: string | null; // String
  }
  User: { // field return type
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
    username: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Auth: { // field return type name
    accessToken: 'String'
    refreshToken: 'String'
  }
  Message: { // field return type name
    body: 'String'
    id: 'String'
    recipient: 'Recipient'
    sender: 'User'
    senderId: 'String'
    sentAt: 'Date'
  }
  Mutation: { // field return type name
    createMessage: 'Message'
    createUser: 'User'
    deleteMessage: 'Message'
    login: 'Auth'
    updateUser: 'User'
  }
  Query: { // field return type name
    message: 'Message'
    messages: 'Message'
    recipient: 'Recipient'
    recipients: 'Recipient'
    user: 'User'
    users: 'User'
  }
  Recipient: { // field return type name
    groupId: 'String'
    id: 'String'
    message: 'Message'
    messageId: 'String'
    recipientKeep: 'Boolean'
    user: 'User'
    userId: 'String'
  }
  User: { // field return type name
    email: 'String'
    firstName: 'String'
    id: 'String'
    lastName: 'String'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createMessage: { // args
      data: NexusGenInputs['MessageCreateInput']; // MessageCreateInput!
    }
    createUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteMessage: { // args
      where: NexusGenInputs['MessageWhereUniqueInput']; // MessageWhereUniqueInput!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    updateUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    message: { // args
      where: NexusGenInputs['MessageWhereUniqueInput']; // MessageWhereUniqueInput!
    }
    recipient: { // args
      where: NexusGenInputs['RecipientWhereUniqueInput']; // RecipientWhereUniqueInput!
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}