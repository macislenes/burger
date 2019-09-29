# Eat da Burger

## What is Eat da Burger?

This is an application used to show the get, post and put routes for mysql and using handlebars to dynamically render the information to our html. You will be able to add burgers you would like to eat to the database and check them as devoured after they have been eaten. 

## How was it implemented?

Eat da Burger has three parts to it. Client side HTML using Handlebars & JavaScript as well as as server side JavaScript based on node & server side MySQL queries.

## Dependencies

Eat da Burger uses the following node packages as dependencies:

* [express](https://www.npmjs.com/package/express) - Used to start our server and listen for client requests
* [mysql](https://www.npmjs.com/package/mysql) - Used as our database
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) - Used to keep dynamically render content from mysql


## Looking at the code:
* **server.js:** Contains the information to start our server and configure it
* **.gitignore:** File which instructs git to ignore the files contained in it

 
## Unpacking the app:
The application is divided into six main parts

* config: holds two Javascript files   
    * connection.js - sets up the mysql connection
    * orm.js - what our models will use to communicate to the database

* controllers: responsible for defining routes that the server can listen to
    * get '/index'- using the model to display the burgers currently in the database
    * post '/burger'- using the model we are inserting a new burger into the mysql database 
    * put '/burger/id- using the model we will update a burger from un-devoured to devoured

* db: our mysql files
    * schema.sql - creates our database
    * seeds.sql - feeds the database data

* models: representation of the data we plan on sending to the database. Connects the orm which communicates with the database 

* public: contains the assets we will use on the client side such as CSS and Javascript

* views: contains the main.handlebars page we will use as a layout and the index.handlebars to render the burgers to the html dynamically

 
## Start to Finish:
Here's how you can use Eat da Burger!

1. Enter the name of a burger you like to enjoy 
2. Press the 'Add a Burger' button
3. When you want to eat the burger push the 'Devour' button
4. The burger will move from the left to the right of the page


Designed and developed by: Maci Slenes
