# A RESTful Service build with Node.js, typescript, mongodb

## Tools

- Express
- Mongoose
- Using eslint/prettier with the goal to making code more consistent and avoiding bugs.
- Yarn as package manager
- Postman to test & execute the endpoints
- Joi to validate the inputs

## Requirements

- Node 14
- Git

## Notes

- Note 1: This repository includes the postman collection for the finished API
- Note 2: Application will run with `yarn dev` command.
- Note 3: `yarn build` command will build for the production deployment
- Note 4: An endpoint named `/seed` is added to seed some test data.

## Git clone

Clone the repo and install the dependencies.

```
git clone https://github.com/nazmoonnoor/domain-adviser-api.git
cd domain-adviser-api
```

## Setup steps 

- Rename `.env.example` file to `.env`.
- Install mongodb and change `MONGODB_CONNECTION` in .env file if needed.
- `yarn install`
- `yarn dev`

## Run use cases with Postman collection

- Postman collection and environment json has been share on root folder. Please download them and import to postman.
- `/healthcheck` to verify service availability
- Run `/seed` to add test data to db tables

## Following are done from code_challenge specification

- Models are created as Mongoose Schema. Please check `/src/models` directory.
- CRUD operations for `User`, `Post`, `Comment` entities.
- `/api/postcomment/getByUser/<user_id>` retrieves all comments for a specific user.
- `/api/postcomment/getHashtagsAndMentions/10` retrieve a ranked list of the top 10 hashtags and top 10 mentions, and how often they were used.
