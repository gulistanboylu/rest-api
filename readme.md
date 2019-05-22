# REST API example with Express.js

Enter the project folder and install dependencies:

```
cd rest-api
npm install
```

# Run the project with docker

Make sure docker installed on your machine. Then:

```
docker-compose up
```

You can visit the following URLs;

| URL | Description
| --- | ---
| `http://localhost:3000` | Index page
| `http://localhost:3000/person` | People JSON
| `http://localhost:3000/person/list` | People list
| `http://localhost:3000/person/:personId` | Person detail page with `personId`

`http://localhost:3000/person` also supports `POST` and `DELETE` actions to
create new records or delete given records.