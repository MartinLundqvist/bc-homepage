import { Handler } from '@netlify/functions';
import { parseWorks } from '../src/utils/utils';
import { getData } from '../src/utils/data';

const handler: Handler = async () => {
  try {
    const results = await getData('Works!A2:G10');
    if (results) {
      try {
        return {
          statusCode: 200,
          body: JSON.stringify(parseWorks(results)),
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: JSON.stringify({
            message: 'Error parsing Works data - parseWorks threw an exception',
            error: error.message,
          }),
        };
      }
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Error getting Works data - response was empty',
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error getting Works data - getData threw an exception',
        error: error.message,
      }),
    };
  }
};

export { handler };
