// Import the necessary modules
import { defineEventHandler, readBody } from 'h3';
import Users from '~/server/models/userModel.js';

// Define the event handler
const handler = async (event:any) => {
  try {
    // Read the body of the request
    const body = await readBody(event);
    
    // Query the Users model (assuming this is a MongoDB model)
    const products = await Users.find();

    // Log the event and return the result
    console.log('event---defineEventHandler', body);
    return { statusCode: 200, body: JSON.stringify({ products, body }) };
  } catch (error) {
    console.error('Error in API handler:', error);
    return { statusCode: 500, body: 'Internal Server Error' };
  }
};

// Export the event handler
export default defineEventHandler(handler);


