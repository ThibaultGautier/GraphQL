const fetch = require('node-fetch');

const resolvers = {
  Query: {
    users: (_, { id }) => {
      return fetch(`http://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
        return response.json()
      }).catch((err) => {
        console.log("err: ", err)
      })
    },
    albums: (_, {id})=>{
      return fetch(`http://jsonplaceholder.typicode.com/albums/${id}`).then((response) => {
        return response.json()
      }).catch((err) => {
        console.log("err: ", err)
      })
    },
    userAlbums: (_, { userId }) => {
      return fetch(`http://jsonplaceholder.typicode.com/albums/${userId}`).then((response) => {
        return response.json()
      }).catch((err) => {
        console.log("err: ", err)
      })
    },
    comments: (_, { id }) => {
      return fetch(`http://jsonplaceholder.typicode.com/comments/${id}`).then((response) => {
        return response.json()
      }).catch((err) => {
        console.log("err: ", err)
      })
    },
    commentsByPostId: (_, { postId }) => {
      return fetch(`http://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((response) => {
        return response.json()
      }).catch((err) => {
        console.log("err: ", err)
      })
    },
    photos: (_, { id }) => {
      return fetch(`http://jsonplaceholder.typicode.com/photos/${id}`).then((response) => {
        return response.json()
      }).catch((err) => {
        console.log("err: ", err)
      })
    },
    todo: (_, { id }) => {
      return fetch(`http://jsonplaceholder.typicode.com/todos/${id}`).then((response) => {
        return response.json()
      }).catch((err) => {
        console.log("err: ", err)
      })
    },
    postsById: (_, { id }) => {
      return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
        return response.json()
      }).catch((err) => {
        console.log("err: ", err)
      })
    },
    postsByUserId: (_, {userId})=>{
      return fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((response) => {
        return response.json()
      }).catch((err) => {
        console.log("err: ", err)
      })
    },

  }
}

module.exports = resolvers