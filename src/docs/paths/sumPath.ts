import { algorithmResponse } from '../responses';

const userPath = {
  '/sum': {
    get: {
      tags: ['sum'],
      summary: 'Run the sum algorithm',
      parameters: [{
        in: 'query',
        name: 'a',
        required: true,
        schema: {
          type: 'string',
        },
        description: 'the first addend',
        default: 0,
      },
      {
        in: 'query',
        name: 'b',
        required: true,
        schema: {
          type: 'string',
        },
        description: 'The second addend',
        default: 0,
      }],

      responses: algorithmResponse.get,
    },
  },
};

export default userPath;
