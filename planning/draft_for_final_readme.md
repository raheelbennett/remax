## Setup

Install dependencies with `npm install`.

## Creating The DB

Use the `psql -U development` command to login to the PostgreSQL server with the username `labber` and the password `laber`. This command **MUST** be run in a vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment.

Create a database with the command `CREATE DATABASE remax;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

```
DB_HOST=localhost
DB_USER=labber
DB_NAME=remax
DB_PASS=labber
DB_PORT=5432
```

## Seeding

**_To be added_**
