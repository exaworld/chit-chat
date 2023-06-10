import { gql } from '@apollo/client';

export const Login = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        accessToken
        }
    }
`;
