# code-verifier-backend

NodeJS Backend Server

### Installed dependencies

- **Express** - NodeJs Framework
- **dotenv** - Library for enviroments declaracions on local development
- **nodemon** - Library that watch for changes in our code and restart server automatically
- **jest** - A JS library for running unitary tests
- **concurrently** - library for running mulitple scripts in one line concurrently
- **eslint** - helping library for coding with the same standar in our team
- **typescript** - Strongly typed language for javascript
- **webpack** - Module that bundles all proyect files
- **serve** - Library that runs a server locally so we can view satic files on browser
- **ts-jest** - TypeScript library for jest
- **ts-node** - Node typescript library needed for jest testing
- **@types/express** - typescript definitions for express
- **@types/node** - typescript definitions for node
- **@types/jest** - typescript definitions for jest
- **supertest** - A library for making http requests tests
- **cors** - Allow incomming requests from external domains
- **helmet** - Security setting for Headers response
- **mongoose** - object modeling for intereact with MongoDB

### Package.json Scripts

- **build**: Compiles all typescript code to javacript language on ``/dist`` folder
- **start**: Runs compiled javascript from ``/dist`` folder
- **dev**: Watch for changes in our typescript code and recompiles it and runs automatically from ``/dist/index.js``
- **test**: Executes test with jest library
- **server:couverage**: Runs tests and serve static report on ``coverage/lcov-report`` folder

### Enviroment variables

- **PORT** set the port you want to run app
