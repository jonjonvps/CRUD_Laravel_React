#  CRUD_Laravel_React

Create a basic CRUD (Create, Read, Update and Delete) for a User. Using Laravel, React and mysql.

## Require

* Xampp and Composer to Laravel;
* Nodejs and npm to React

## Version

* Laravel Framework 10.42.0
* Php 8.2.12
* React 18.2.0

## getting started

In Xampp activate MySQL Database and Apache web Serve.

#### With the terminal goes to the "Back" folder

Check if there are any Laravel dependencies that need to be installed:

```
composer install
```

Check that the file `.env` exists in the project directory. If it doesn't, copy the file `.env.example` and rename it to `.env`. This file contains the environment settings, including database details.

Run the migrations to create the database tables defined in the project:

```
php artisan migrate
```

Start the development server with the command:

```
php artisan serve
```
#### With the terminal goes to the "Front" folder 

Install the project dependencies

```
npm install
```

Start the development server with the command:

```
npm start
```

