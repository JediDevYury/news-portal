// GraphQL query to get hooks information
import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query GetUserInfo {
    viewer {
      login
      name
      avatarUrl
      bio
    }
  }
`;
