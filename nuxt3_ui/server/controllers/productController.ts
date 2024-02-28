// Import the necessary modules
import { defineEventHandler, readBody } from "h3";
import Product from '../models/productModel';
import parseError from '../utils/errorParser';

// Define the event handler
export default {
  getAll: async (event: any) => {
    try {
    //   const reqbody = await readBody(event);
      // const name = getRouterParam(event, 'name')
    const query = "getQuery(event);"
    //   const cookies = parseCookies(event);
    if (typeof query !== 'object' || query === null) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid filter parameter',
        stack: "Bad Request",
      });
    }
    const result = await Product.get(query,query)
    console.log('result=====',result);
    return { result:result };
    } catch (error) {
    return parseError(error)
    }
  },
  save: async (event: any) => {
    try {
      // Read the body of the request
      const reqbody = await readBody(event);
      // const name = getRouterParam(event, 'name')
      const query = getQuery(event);
      const cookies = parseCookies(event);

      return { reqbody: reqbody, query: query, cookies: cookies };
    } catch (error: any) {
      console.error("Error in API handler:", error);

      if (error?.cause) {
        return error;
      } else if (error.errors) {
        throw createError({
          statusCode: 400,
          statusMessage: error.message,
          data: error.errors,
          stack: "",
        });
      } else {
        throw createError({
          statusCode: 500,
          statusMessage: "Internal server error",
          stack: "",
        });
      }
    }
  },
  handler2: async (event: any) => {
    try {
      // Read the body of the request
      // const body = await readBody(event);
      const name = getRouterParam(event, 'test2')

      // Log the event and return the result
      console.log("req---body handler2", name);
      return { statusCode: 200, body: JSON.stringify({ name:name }) };
    } catch (error) {
      console.error("Error in API handler:", error);
      return { statusCode: 500, body: "Internal Server Error" };
    }
  },
//   handler : async (event: any) => {
//       try {
//         const id = getRouterParam(event, "id");
    
//         const result = await Product.findOne({
//           _id: id,
//         });
//         console.log("result===", result);
    
//         if (result) {
//           return result;
//         } else {
//           throw createError({
//             statusCode: 500,
//             statusMessage: "Something went wrong unable to get product",
//             stack: "",
//           });
//         }
//       } catch (error: any) {
//         console.error("Error in API handler:", error);
    
//         if (error?.cause) {
//           return error;
//         } else {
//           throw createError({
//             statusCode: 500,
//             statusMessage: "Internal server error",
//             stack: "",
//           });
//         }
//       }
//     }
};
