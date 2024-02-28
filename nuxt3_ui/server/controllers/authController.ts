import { defineEventHandler, readBody } from 'h3';
// import User from '~/server/models/userModel.js';

// Define the event handler
export const handler1 = async (event:any) => {
  try {
    // Read the body of the request
    const body = await readBody(event);
    
    // Log the event and return the result
    console.log('req---body handler1', body);
    return { statusCode: 200, body: JSON.stringify({ body }) };
  } catch (error) {
    console.error('Error in API handler:', error);
    return { statusCode: 500, body: 'Internal Server Error' };
  }
};
export const handler2 = async (event:any) => {
  try {
    // Read the body of the request
    const body = await readBody(event);
    
    // Log the event and return the result
    console.log('req---body handler2', body);
    return { statusCode: 200, body: JSON.stringify({ body }) };
  } catch (error) {
    console.error('Error in API handler:', error);
    return { statusCode: 500, body: 'Internal Server Error' };
  }
};

// Export the event handler
// export default defineEventHandler(handler2);


