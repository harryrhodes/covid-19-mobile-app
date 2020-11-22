# Introduction 
This is the back-end piece of the Covid-19 App made by Valhalla Software. This is the part of our Contemporary Software Development Coursework.

# Getting Started
Make sure you have Node.js 10 LTS installed.

Also ESLint should be installed globally with `npm install -g eslint` and "Format on Save" option should be enabled in VS Code, to keep the code formatting consistent.

Install dependencies with `npm install` .

Set up the environment variables with `.env`, using the `.env.example` as a template.

# Build and Test
Just do `npm start` to run locally.  

Use Postman to call `http://localhost:4000`.

Functional (mocked) tests are in the `tests` directory.

Testing can be started with `npm test`.  Jest is the test runner.

# Directory Structure

* `/.vscode` - VS Code specific config such as debugging profiles
* `/lib` - Main source code
* `/lib/core` - Common code across multiple routes
* `/lib/models` - Mongoose data schemas
* `/lib/routes` - API routes
* `/tests` - Functional tests

# Contribute
Contact LJMU for more details.