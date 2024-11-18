// Mutation to star a repository
import { gql } from "@apollo/client";

export const FIND_ISSUE_ID = gql`
  query FindIssueID($name: String!, $owner: String!, $issue: Int!) {
    repository(name: $name, owner: $owner) {
      issue(number: $issue) {
        id
        title
      }
    }
  }
`;

export const ADD_REACTION_TO_ISSUE = gql`
  mutation AddReactionToIssue($subjectId: ID!, $content: ReactionContent!) {
    addReaction(input: { subjectId: $subjectId, content: $content }) {
      reaction {
        content
      }
      subject {
        id
      }
    }
  }
`;

export const UPDATE_ISSUE_TITLE = gql`
  mutation UpdateIssueTitle($issueId: ID!, $title: String!) {
    updateIssue(input: { id: $issueId, title: $title }) {
      issue {
        id
        title
      }
    }
  }
`;
