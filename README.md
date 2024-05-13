# Activities Backend

## Description

A simple backend app enabling users to search for activities.

## Frontend Repository

The backend repository for this application can be found at:
[Activities Frontend Repository](https://github.com/Hossam-Ali/activities-frontend)

## How to Run

### Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running:
   ```
   npm install
   ```

### Starting the Server without Docker

To start the server, run:

```
npm start
```

The server will start running on `http://localhost:3000`.

### Running with Docker

To run the application using Docker, make sure Docker is installed and follow these steps:

1. Build and start the Docker container:

```
docker-compose up --build
```

This command will build the Docker image for the frontend application and start the container. You can access the application at `http://localhost:3000`.

## How to Run Tests

To run tests, execute the following command:

```
npm test
```
