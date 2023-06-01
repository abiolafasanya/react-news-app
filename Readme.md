# React News App Readme

This README provides instructions on how to start a Dockerized app using the provided configuration files.

## Prerequisites

Before you begin, ensure that you have the following prerequisites installed on your system:

- Docker: The Docker Engine must be installed and running on your machine. You can download Docker from the official website: [https://www.docker.com/get-started](https://www.docker.com/get-started)

## Getting Started

To start the Dockerized app, follow these steps:

1. Clone the repository: `git clone https://github.com/dev-harbiola/react-news-app`
2. Navigate to the project directory: `cd react-news-app`

### Starting the App

To start the app, execute the following command in the project directory:

```shell
docker-compose up -d
```

This command will build the Docker images and start the containers defined in the `docker-compose.yml` file.

The Docker Compose file contains three services:

1. `db` - PostgreSQL database service.
2. `server` - Backend Laravel API server.
3. `client` - Frontend client.

### Accessing the App

- Backend Laravel API: The backend API will be accessible at `http://localhost:8000`.
- Frontend Client: The frontend client will be accessible at `http://localhost:3000`.

Note: Make sure the ports 8000 and 3000 are not already in use on your system.

### Stopping the App

To stop the running containers, execute the following command in the project directory:

```shell
docker-compose down
```

This will stop and remove the containers, but the data stored in the PostgreSQL database will persist.

## Configuration

The provided `docker-compose.yml` file defines the services and their configurations. Here's a brief overview:

### Database Service (`db`)

- Image: `postgres:15-alpine`
- Environment variables:
  - `POSTGRES_USER`: Username for the PostgreSQL database (set to `postgres` in this example).
  - `POSTGRES_PASSWORD`: Password for the PostgreSQL user (set to `abiola78` in this example).
  - `POSTGRES_DB`: Name of the database to be created (set to `mydb` in this example).

### Backend Laravel API Service (`server`)

- Image: `backend-laravel-api_server`
- Ports:
  - `8000:8000`: Maps the container's port 8000 to the host's port 8000.
- Volumes:
  - `./:/var/www/html`: Mounts the current directory (the project root) to the container's `/var/www/html` directory.
- Dependencies:
  - `db`: Specifies that the `server` service depends on the `db` service.

### Frontend Client Service (`client`)

- Build context: The current directory (the project root).
- Dockerfile: `Dockerfile`
- Ports:
  - `3000:3000`: Maps the container's port 3000 to the host's port 3000.
- Volumes:
  - `./:/app`: Mounts the current directory (the project root) to the container's `/app` directory.
- TTY: Allocates a pseudo-TTY for the `client` service.

Feel free to modify these configurations according to your specific requirements.

## Troubleshooting

If you encounter any issues or errors while running the Dockerized app, here are a few suggestions:

1. Ensure that Docker is installed and running correctly on your system.
2. Verify that the required ports (8000 and 3000) are not being used by other applications.
3. Check the logs of the containers for any error messages using the `docker-compose logs` command.
