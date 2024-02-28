import productSchema from "./schema/productSchema";
import getConnection from "../utils/dbConnection";

const connection: any = getConnection(1);
const Product = connection.model("Product", productSchema);

export default {
  getSum: async (params: any, field: any) => {
    try {
      return await Product.aggregate([
        {
          $match: params,
        },
        {
          $group: { _id: null, total: { $sum: field } },
        },
      ]);
    } catch (error) {
      console.error("Error in getSum aggregate query:", error);
      throw error;
    }
  },

  push: async (params: any) => {
    try {
      return await Product.updateMany(params.selector, { $push: params.data });
    } catch (error) {
      console.error("Error in push query:", error);
      throw error;
    }
  },

  pull: async (params: any) => {
    try {
      return await Product.updateMany(params.selector, { $pull: params.data });
    } catch (error) {
      console.error("Error in pull query:", error);
      throw error;
    }
  },

  getWithoutSort: async (params: any, fields: any = null) => {
    try {
      return await Product.find(params, fields);
    } catch (error) {
      console.error("Error in getWithoutSort query:", error);
      throw error;
    }
  },

  get: async (params: any, fields: any = null) => {
    try {
      return await Product.find(params, fields).sort(
        params && params.sort ? params.sort : { createdAt: -1 }
      );
    } catch (error) {
      console.error("Error in get query:", error);
      throw error;
    }
  },

  getPagesAggregate: async (
    params: any,
    dateQuery: any,
    fields: any = null,
    order_q: any = undefined
  ) => {
    try {
      // ... (rest of the code)
    } catch (error) {
      console.error("Error in getPagesAggregate aggregate query:", error);
      throw error;
    }
  },

  getInventoryAggregate: async (
    params: any,
    search: any,
    fields: any = null
  ) => {
    try {
      // ... (rest of the code)
    } catch (error) {
      console.error("Error in getInventoryAggregate aggregate query:", error);
      throw error;
    }
  },

  getPages: async (params: any, fields: any = null) => {
    try {
      let size = params.size ? parseInt(params.size) : 10000;
      let page = params.page ? parseInt(params.page) : 1;
      let query = params.query ? params.query : params;
      return await Product.find(query, fields)
        .populate("domain")
        .sort(params && params.sort ? params.sort : { createdAt: -1 })
        .limit(size)
        .skip(size * (page - 1));
    } catch (error) {
      console.error("Error in getPages query:", error);
      throw error;
    }
  },

  getFetch: async (params: any, fields: any = null) => {
    try {
      let size = params.size ? parseInt(params.size) : 10000;
      let page = params.page ? parseInt(params.page) : 1;
      let query = params.query ? params.query : params;
      return await Product.find(query, fields)
        .sort(params && params.sort ? params.sort : { createdAt: -1 })
        .limit(size)
        .skip(size * (page - 1));
    } catch (error) {
      console.error("Error in getFetch query:", error);
      throw error;
    }
  },

  getCount: async (params: any) => {
    try {
      return await Product.countDocuments(params.query ? params.query : params);
    } catch (error) {
      console.error("Error in getCount query:", error);
      throw error;
    }
  },

  get_w_select: async (params: any, select: any) => {
    try {
      return await Product.find(params).select(select);
    } catch (error) {
      console.error("Error in get_w_select query:", error);
      throw error;
    }
  },

  get_w_sort: async (params: any, select: any, sort: any) => {
    try {
      return await Product.find(params).select(select).sort(sort);
    } catch (error) {
      console.error("Error in get_w_sort query:", error);
      throw error;
    }
  },

  add: async (params: any) => {
    try {
      let newProduct = new Product(params);
      return await newProduct.save();
    } catch (error) {
      console.error("Error in add query:", error);
      throw error;
    }
  },

  update: async (params: any) => {
    try {
      return await Product.updateOne(params.selector, { $set: params.data });
    } catch (error) {
      console.error("Error in update query:", error);
      throw error;
    }
  },

  updateMany: async (params: any) => {
    try {
      return await Product.updateMany(params.selector, { $set: params.data });
    } catch (error) {
      console.error("Error in updateMany query:", error);
      throw error;
    }
  },

  delete: async (id: any) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      return deletedProduct;
    } catch (error) {
      console.error("Error in delete query:", error);
      throw error;
    }
  },
};
