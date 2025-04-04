# Node.js Prisma Project

This is a Node.js project using Prisma ORM to interact with a database. It provides an easy way to work with databases in Node.js applications, supporting data models, migrations, and complex queries.

## Technologies Used

* Node.js - JavaScript runtime environment for the backend.
* Prisma - ORM for Node.js that simplifies database interaction.
* Express - Minimalist framework for creating the API.
* Jest - Testing framework.
* PostgreSQL (or any other database supported by Prisma) - Database used for storing information.

## Features

- CRUD operations for managing **clients** and **deliverymen**.
- Management of **deliveries** and assigning deliveries to a specific deliveryman.
- Authentication and authorization using JWT (JSON Web Tokens).

## Installation
1. Clone the repository
* git clone https://github.com/luizcurti/nodejs-prisma-project.git
* cd nodejs-prisma-project

2. Install dependencies
Run the following command to install the project dependencies:
* npm install

3. Database Configuration
* Create a .env file at the root of the project to store your database configuration. Example for a PostgreSQL database:
* DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/database_name?schema=public"

4. Initialize Prisma
* Prisma needs to be configured to generate models and migrations for the database.
* Generate the Prisma client: 
- npx prisma generate
* Run migrations to create tables in the database: 
- npx prisma migrate dev --name init

5. Running the Server
* After configuring the database, you can run the application with the following command:
- npm start

The server will run on port 3000 by default.

## API Endpoints
Here are some of the available API endpoints:

### Client
POST /client - Create a new client.
POST /client/authenticate - Authenticate a client and generate a JWT token.
GET /client/deliveries - List deliveries for an authenticated client.

### Deliveryman
POST /deliveryman - Create a new deliveryman.
POST /deliveryman/authenticate - Authenticate a deliveryman and generate a JWT token.
GET /deliveryman/deliveries - List deliveries assigned to an authenticated deliveryman.
PUT /delivery/updateDeliveryman/:id - Assign a deliveryman to a delivery.

### Delivery
POST /delivery - Create a new delivery.
PUT /delivery/updateEndDate/:id - Update the end date of a delivery.
GET /delivery/available - List available deliveries to be accepted.

### Tests
To run the tests for the project, use the following command:
npm test

This will run the tests configured with Jest.

## Project Structure
* .
* ├── src/
* │   ├── controllers/    # Contains the controllers for the application (business logic)
* │   ├── models/         # Database models (Prisma definitions)
* │   ├── routes/         # API route definitions
* │   ├── services/       # Service logic (functions related to database interaction)
* │   └── middlewares/    # Middlewares (e.g., authentication)
* ├── prisma/             # Files related to Prisma (schema, migrations)
* │   ├── schema.prisma   # Database schema definition
* ├── .env                # Environment variable file
* ├── package.json        # Project's package manager and dependencies
* ├── README.md           # This file
* └── server.js           # Server initialization file (Express)

## Contributing
if you wish to contribute to the project, feel free to open a pull request with your improvements or bug fixes.