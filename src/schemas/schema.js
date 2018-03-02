const typeDefs = `

type Query {
  users(id: ID): User
  albums(id: ID): Album
  userAlbums(userId: ID) : Album
  comments(id: ID): Comment
  photos(id: ID): Photo
  todo(id: ID): Todo
  postsById(id: ID): Post
  postsByUserId(userId: ID): [Post]!
  commentsByPostId(postId: ID): [Comment]!
}

type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    address : Address
    phone: String!
    website: String!
    company: Company
    
}

type Album {
  userId: ID!
  id: ID!
  title: String!
}

type Company {
  name: String!
  catchPhrase: String!
  bs: String
}

type Address  {
  street: String!
  suite: String!
  city: String!
  zipcode: String!
  geo: Geo
}

type Geo {
  lat: String!
  lng: String!
}

type Comment {
  postId: ID!
  id: ID!
  name: String!
  email: String!
  body: String!
}

type Photo {
  albumId: ID!
  id: ID!
  title: String!
  url: String!
  thumbnailUrl: String!
}

type Todo {
  userId: ID!
  id: ID!
  title: String!
  completed: Boolean!
}

type Post {
  userId: ID!
  id: ID!
  title: String!
  body: String!
}

`

module.exports = typeDefs