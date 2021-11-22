import { sumPath, countWaysPath } from './paths';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Inclusio challenge API',
    description: 'API made for the Inclusio challenge',
    version: '0.0.1',
  },
  servers: [
    {
      url: 'https://inclusio-challenge.herokuapp.com',
      description: 'Deploy',
    },
    {
      url: 'http://localhost:3001',
      description: 'Local Server',
    },
  ],
  paths: {
    ...sumPath,
    ...countWaysPath,
  },
};
