import { algorithmResponse } from '../responses';

const userPath = {
  '/count-ways': {
    get: {
      tags: ['count ways'],
      summary: 'Run the countWays algorithm',
      parameters: [{
        in: 'query',
        name: 'steps',
        required: true,
        schema: {
          type: 'integer',
        },
        description: 'The number of steps',
        default: 0,
      }],

      responses: algorithmResponse.get,
    },
  },
};

export default userPath;
