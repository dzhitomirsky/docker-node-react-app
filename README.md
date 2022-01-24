## Build containbers locally
* Run `cd backend && docker build -t backend .`
* Run `cd frontend && docker build -t frontend .`

## Run locally in docker-compose
Run `docker-compose up` (add `-d` for detached mode)

* Open `localhost` to open frontend 
* You can send all api requests to `/api/..`, initially only `/api/users` is available

Both back and frontend source folders (including node modules) are volumed into containers, so backend and frontend servers will be restrted every tome you change the code.

## Shutdown
* Run docker `docker-compose stop` to gracefully stop all containers. 
* Run `docker-compose rm` to delete container versions
* Run `docker volume prune` to clena volumes

## Check MySQL data
MySQL data is saved to `mysql-data` volume through a corresponding volume. If you do not need persistence, you can disable it by removing corresponding volume setup in docker compose.

To mamnage db data using a visual ui, open `localhost:8080` use db name, user & password configured in the corresponding sections of docker-compose file.

## Troubleshooting
During the cold start it is possible that backend does not start because mysql is not available yet or nginx fails to find upstream. In this case just restart the service by running:
`docker compose up -d <service>`, e.g. `docker compose up -d backend`