import { gql } from '@apollo/client';

export const ALL_USERS = gql`
    query Users {
        users {
        email
        id
        }
    }
`;
