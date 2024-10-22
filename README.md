
# MERN Book Search Engine

## Description

This is a full-stack book search engine that allows users to search for books using the Google Books API and manage their own list of saved books. The app is built using the **MERN stack** (MongoDB, Express, React, Node.js), and refactored to use **GraphQL** with **Apollo Server**. Users can sign up, log in, search for books, save books to their account, and remove books from their saved list.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)

## Installation

To get started with the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies for both the server and client:
   ```bash
   npm run install
   ```

3. Start the development environment:
   ```bash
   npm run develop
   ```

## Usage

### Running Locally:

- Open your browser and go to `http://localhost:3000` to access the app.
- You can search for books, create an account, log in, and save or remove books.

### GraphQL API:

The back-end uses **GraphQL** for all API operations. You can test the API using **GraphQL Playground** by accessing `http://localhost:3001/graphql` in your browser.

### Queries and Mutations:

#### Example Queries:
- **Get current user data** (including saved books):
   ```graphql
   query {
     me {
       _id
       username
       savedBooks {
         bookId
         title
         authors
         description
       }
     }
   }
   ```

#### Example Mutations:
- **Sign up a new user**:
   ```graphql
   mutation {
     addUser(username: "testuser", email: "test@test.com", password: "password123") {
       token
       user {
         _id
         username
       }
     }
   }
   ```

- **Login a user**:
   ```graphql
   mutation {
     login(email: "test@test.com", password: "password123") {
       token
       user {
         _id
         username
       }
     }
   }
   ```

- **Save a book**:
   ```graphql
   mutation {
     saveBook(bookId: "1234", title: "Book Title", authors: ["Author1"], description: "A great book.") {
       _id
       username
       savedBooks {
         bookId
         title
       }
     }
   }
   ```

- **Remove a saved book**:
   ```graphql
   mutation {
     removeBook(bookId: "1234") {
       _id
       savedBooks {
         bookId
         title
       }
     }
   }
   ```

## Technologies Used

- **MongoDB**: NoSQL database used to store user and book information.
- **Express.js**: Web framework for Node.js.
- **React.js**: Front-end JavaScript library for building user interfaces.
- **Node.js**: Back-end JavaScript runtime environment.
- **GraphQL**: API query language and runtime.
- **Apollo Server**: Server to handle GraphQL queries and mutations.
- **JWT (JSON Web Tokens)**: For user authentication.

## Features

- **Search for Books**: Users can search for books using the Google Books API.
- **User Authentication**: Users can sign up, log in, and save books to their profile.
- **Save Books**: Authenticated users can save books to their personal account.
- **Delete Books**: Users can remove books from their saved list.

## Testing

The app can be tested using the **GraphQL Playground** at `http://localhost:3001/graphql` or by interacting with the front-end UI.

Make sure to test:
- Sign-up functionality
- Login functionality
- Book search
- Saving and removing books

## Deployment

This application is deployed on **Render** and uses **MongoDB Atlas** as the database.

- **Deployed Application**: [Link to Deployed App](#)
- **GraphQL Playground**: [Link to GraphQL Playground](#)

## License

This project is licensed under the MIT License.
