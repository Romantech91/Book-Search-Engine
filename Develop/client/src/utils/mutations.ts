import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookId: String!
    $authors: [String]
    $description: String!
    $title: String!
    $image: String
    $link: String
  ) {
    saveBook(
      bookId: $bookId
      authors: $authors
      description: $description
      title: $title
      image: $image
      link: $link
    ) {
      _id
      username
      savedBooks {
        bookId
        title
        description
      }
    }
  }
`;
