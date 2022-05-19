import { Handler } from '@netlify/functions';
import { parseProjects } from '../src/utils/utils';
import { getData } from '../src/utils/data';

const handler: Handler = async () => {
  try {
    const results = await getData('Projects!A2:G15');
    if (results) {
      try {
        return {
          statusCode: 200,
          body: JSON.stringify(parseProjects(results)),
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({
            message:
              'Error parsing Project data - parseProjects threw an exception',
            error: error.message,
          }),
        };
      }
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Error getting Project data - response was empty',
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error getting Project data - getData threw an exception',
        error: error.message,
      }),
    };
  }
};

export { handler };
