# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# screenshot
!["PhotoLab Main Page"](https://github.com/nifen44/photolabs-starter/blob/main/doc/photo-list.png?raw=true)

!["PhotoLab Detail Page"](https://github.com/nifen44/photolabs-starter/blob/main/doc/photo-detail.png?raw=true)

!["PhotoLab Detail List Page"](https://github.com/nifen44/photolabs-starter/blob/main/doc/photo-detail-list.png?raw=true)

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

[Database] setting
- Use `CREATE USER development WITH PASSWORD ‘development’;` to create a new user 'development' with password 'development'. 
- Use `ALTER USER development WITH SUPERUSER` to give the new user superuser role.
- Use the `psql -U development` command to login to the PostgreSQL server.
- Create a database with the command `CREATE DATABASE photolabs_development;`.
- Connect to photolabs_development database with the command `\c photolabs_development`

## Seeding
- Make a GET request to /api/debug/reset with curl http://localhost:8001/api/debug/reset.
- Use the browser to navigate to http://localhost:8001/api/debug/reset

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
