# mini-birds
 
## Objectives

We're going to build a **bird-sighting** API using all four traditional CRUD operations.

## Step 1: Clone the repo

Create your Express.js app by cloning this repository.

## Step 2: Install the NPM modules

```
npm install
```

## Step 4: Test it

Test your application by running one of the following:
 
```
node server.js
nodemon server.js
supervisor server.js
```

Test each of your endpoints in Postman with the following URLs:

* **POST** `/api/sighting`
* **GET** `/api/sighting?region=america`
* **PUT** `/api/sighting?id=some-id`
* **DELETE** `/api/sighting?id=some-id`

If everything's working, you'll see console output each time you hit your endpoints.

## Step 5: Start mongod

Start the mongo daemon in a separate terminal window.

## Step 6: Require and connect to Mongo

Now, require the MongoJS module, and create a database by connecting to it in `server.js`. Name your database `birds`.

HINT: Read the documentation:

[](https://github.com/mafintosh/mongojs)

## Step 7: Declare your `sightings` collection

Create a var that references a collection called `sightings`.

## Step 8: Upgrade 'POST' endpoint to record a sighting

Upgrade your POST endpoint with code to create a sighting document from the `body` of the request. The body should include `name`, `order`, and `status`.

See `birds.json` in your repository for ideas.

For steps 8 through 11, test each of your endpoints again.

## Step 9: Upgrade 'GET' endpoint to retrieve a sighting

Modify the GET endpoint to retrieve all sightings with a given `status`, as stated in the request query.

## Step 10: Upgrade 'PUT' endpoint to modify a sighting

Update your PUT endpoint to accept a `body` of fields, to modify an existing sighting document. Use the `id` parameter in the query string to identify the sighting to change.

## Step 11: Upgrade 'DELETE' endpoint to delete a sighting

Update your DELETE endpoint to delete a sighting document by `id` in the query string.