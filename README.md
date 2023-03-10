# nodejs-crud-api
Node.js, Express and MongodB: Create a Restfull API


## Step 1: Installing dependencies

Clone the repository then run **npm install**

## Step 2: Link your api to Mongo DB

You can install mongodb locally or use Mongo Atlas (online). In both cases, go to the **.env** file then replace the url **mongodb://localhost:<DB_PORT>/<DB_NAME>** with your url.

## Step 3: Launch your project

To launch your project, just type the following command : **npm run start**. Your API will therefore run on port 3000

## Step 4: Test the API endpoints

This is an API that manages auth. A user is characterized by:
* name: name of user
* email: email of user
* password: password of user

So we have a total of 2 routes for auth

1. Signup user http://localhost:3000/auth/signup
2. Signin user http://localhost:3000/auth/login

* signup user with name, password and email fields
* login user with email, password fields
* put token in header named secret_token

This is an API that manages notes. A note is characterized by:
* title: title of the note
* content: content of the note

So we have a total of 5 routes for notes

1. Add note http://localhost:3000/notes
2. List of all notes http://localhost:3000/notes
3. Find note by Id http://localhost:3000/notes/:id
4. Update note http://localhost:3000/notes/:id
5. Delete note http://localhost:3000/notes/:id


