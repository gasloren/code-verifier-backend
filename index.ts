// Enviroment
import { LogError, LogSuccess } from './src/utils/logger';
import dotenv = require('dotenv');

// Server
import server from './src/server';

// * Enviroment configuration
dotenv.config();

// PORT
const port = process.env.PORT || 8000;

// Execute SERVER
server.listen(port, () => {
  LogSuccess(`[SERVER ON]: Running on http://localhost:${port}/api`)
  console.log();
});

// Server FAILURE
server.on('error', (error) => {
  LogError(`[SERVER ERROR]: ${error}`)
})

