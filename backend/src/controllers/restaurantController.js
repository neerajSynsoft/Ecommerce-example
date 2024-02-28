import Restaurant from "../models/restaurantsModel.js";

// Get all restaurants with pagination and total count
export const getAllRestaurants = async (req, res) => {
  try {
    const {
      pageNo = 1,
      pageSize = 50,
      sortBy = "name",
      sort = "desc",
      location,
      variety,
    } = req.query; // Set default values

    const skip = (pageNo - 1) * pageSize;
    const limit = Math.min(pageSize, 100);
    const sortObject = {};
    sortObject[sortBy] = sort === "desc" ? -1 : 1;

    const filterCriteria = {};
    if (location) {
      filterCriteria.borough = location;
    }
    if (variety) {
      filterCriteria.cuisine = variety;
    }

    // Get total count of restaurants
    const totalCount = await Restaurant.countDocuments(filterCriteria);

    // Check if page is out of bounds
    if (pageNo > Math.ceil(totalCount / limit)) {
      return res.status(404).json({ message: "Page not found" });
    }

    // Find restaurants with pagination options
    const restaurants = await Restaurant.find(filterCriteria, null, {
      skip,
      limit,
      sort: sortObject,
    });

    res.json({
      restaurants,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBoroughs = async (req, res) => {
  try {
    const Boroughs = await Restaurant.distinct("borough");

    res.json({
      Boroughs,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getCuisine = async (req, res) => {
  try {
    const Cuisine = await Restaurant.distinct("cuisine");

    res.json({
      Cuisine,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new restaurant
export const createRestaurant = async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    const savedRestaurant = await newRestaurant.save();
    res.json(savedRestaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a restaurant by ID
export const updateRestaurant = async (req, res) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a restaurant by ID
export const deleteRestaurant = async (req, res) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!deletedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
