import { Schema, model } from "mongoose";
import userSchema from "./schema/usersSchema";

const User = model("User", userSchema);

export default {
  get: async (params: any, fields: any = null) => {
    try {
      return await User.find(params, fields).sort({ createdAt: -1 });
    } catch (error) {
      console.error("Error in get query:", error);
      throw error;
    }
  },
  get_w_role: async (params: any, fields: any = null) => {
    try {
      return await User.find(params, fields)
        .populate("role_id")
        .sort({ createdAt: -1 });
    } catch (error) {
      console.error("Error in get_w_role query:", error);
      throw error;
    }
  },

  getPages: async (params: any, fields: any = null) => {
    try {
      let size = params.size ? parseInt(params.size) : 10000;
      let page = params.page ? parseInt(params.page) : 1;
      let query = params.query ? params.query : params;
      return await User.find(query, fields)
        .populate("parentId", "email")
        .sort(params && params.sort ? params.sort : { createdAt: -1 })
        .limit(size)
        .skip(size * (page - 1));
    } catch (error) {
      console.error("Error in getPages query:", error);
      throw error;
    }
  },
  getFollowup: async (params: any) => {
    try {
      let _id = params._id;
      let type = params.type;
      return await User.find(
        {
          _id: _id,
        },
        {
          followUpTemplates: {
            $elemMatch: {
              type: { $in: type },
            },
          },
        }
      );
    } catch (error) {
      console.error("Error in getFollowup query:", error);
      throw error;
    }
  },

  getCount: async (params: any) => {
    try {
      return await User.countDocuments(params.query ? params.query : params);
    } catch (error) {
      console.error("Error in getCount query:", error);
      throw error;
    }
  },

  get_w_select: async (params: any, select: any) => {
    try {
      return await User.find(params).select(select);
    } catch (error) {
      console.error("Error in get_w_select query:", error);
      throw error;
    }
  },

  get_w_sort: async (params: any, select: any, sort: any) => {
    try {
      return await User.find(params).select(select).sort(sort);
    } catch (error) {
      console.error("Error in get_w_sort query:", error);
      throw error;
    }
  },

  get_w_password: async (params: any) => {
    try {
      return await User.find(params).select("+password");
    } catch (error) {
      console.error("Error in get_w_password query:", error);
      throw error;
    }
  },

  populate: async (params: any, path: any) => {
    try {
      return await User.populate(params, path);
    } catch (error) {
      console.error("Error in populate query:", error);
      throw error;
    }
  },

  add: async (params: any) => {
    try {
      let newUser = new User(params);
      return await newUser.save();
    } catch (error) {
      console.error("Error in add query:", error);
      throw error;
    }
  },

  push: async (params: any) => {
    try {
      return await User.updateOne(params.selector, { $push: params.data });
    } catch (error) {
      console.error("Error in push query:", error);
      throw error;
    }
  },

  update: async (params: any) => {
    try {
      return await User.updateOne(params.selector, { $set: params.data });
    } catch (error) {
      console.error("Error in update query:", error);
      throw error;
    }
  },

  delete: async (id: any) => {
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {
      console.error("Error in delete query:", error);
      throw error;
    }
  },
};
