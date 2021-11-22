const algorithmResponse = {
  get: {
    200: {
      description: 'Algorithm return',
    },
    400: {
      description: 'Incorrect parameters',
    },
    500: {
      description: 'Internal Server Error',
    },
  },
};

export default algorithmResponse;
