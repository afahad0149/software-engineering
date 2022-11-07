# GraphQL

Time to try a new approach to managing your app’s data!

We have provided a full stack app with a RESTful server; you will refactor this app to use GraphQL instead.

## Getting started

- Reading someone else’s code is a valuable skill. Run the REST application and study the interaction between the client and the server. Take time to understand how they work, don’t be in too much hurry to start coding.
- The REST folder contains a full-stack application with two sub-folders: client and server. Inside each of them, run `npm install` to install the required dependencies (make sure you have the [angular cli](https://www.npmjs.com/package/@angular/cli) installed).
- You can use the commands `npm run rest:server` and `npm run rest:client` from the root folder to run the code. Notice that both the client and the server need to be running for the application to work. 
- You’ll be working with a new technology today and you’re not expected to know how to use it straight away. Make sure to read the documentation in depth before you start refactoring to GraphQL.

## Back end

1. For this exercise you’ll use Apollo on top of GraphQL. Take a look at the [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started) documentation to get started. Don’t forget to run `npm init` inside the server folder to create a `package.json`.

2. Define the types and the resolvers for your data entities. Take a look at the REST application to know which data entities you need.

3. When using Apollo server, the default port is 4000. Once your server is running, go to `http://localhost:4000` from your browser to take advantage of the GraphQL playground provided by Apollo to easily create your queries. You can also test your queries from Postman if you prefer.

4. Use the `db.js` file to interact with the data, like in the REST app, instead of requiring the JSON files directly.

Note: the Pokemon type should have at least these fields. Use a [resolver chain](https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-chains) to handle nested fields and fields that are different from your database.
```
type Pokemon {
  id: String!
  name: String!
  types: [Type]!
  moves: [Move]!
  front_pic: String!
  back_pic: String!
}
```

## Front end

1. Copy the files from the REST client to the GraphQL client folder (don’t copy node_modules, just run `npm i` again) to start refactoring the code. Alternatively, you can create a new angular project from scratch and copy the src folder instead.

2. Again, you’ll use Apollo on top of GraphQL. Take a look at the [Angular Apollo](https://apollo-angular.com/docs/get-started#installation-with-angular-schematics) documentation to get started.

3. Refactor the `api-client.service.ts` to use GraphQL (you can also modify other files if you need to).

## Extra credits

- Add functionality to the client and the server to load more than one page of pokemon. You can do this either with an infinite scroll or with “next page” links.
- Import the data into a real database (we recommend MongoDB, but for an extra challenge try a relational database).
