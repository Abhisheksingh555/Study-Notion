import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { categories, catalogCreate } from "../../../../../services/apis";
import axios from "axios";
import { useSelector } from "react-redux";

const AddCatalog = () => {
  const { token } = useSelector((state) => state.auth);
  const [categoriesList, setCategoriesList] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  // Configure axios instance with auth token
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Fetch all categories
  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(categories.CATEGORIES_API);
      const data = response.data;
      if (data.success) {
        setCategoriesList(data.data || []);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error(error.response?.data?.message || "Failed to fetch categories");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingCategory) {
      setEditingCategory({
        ...editingCategory,
        [name]: value,
      });
    } else {
      setNewCategory({
        ...newCategory,
        [name]: value,
      });
    }
  };

  // Add new category
  const handleAddCategory = async (e) => {
    e.preventDefault();

    if (!newCategory.name.trim() || !newCategory.description.trim()) {
      toast.warning("Please fill all fields");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axiosInstance.post(
        catalogCreate.CATALOGPAGECREATE_API,
        newCategory
      );
      const data = response.data;

      if (data.success) {
        toast.success("Category added successfully");
        setNewCategory({ name: "", description: "" });
        fetchCategories();
      } else {
        toast.error(data.message || "Failed to add category");
      }
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error(error.response?.data?.message || "Failed to add category");
    } finally {
      setIsLoading(false);
    }
  };

  // Update category
  const handleUpdateCategory = async (e) => {
    e.preventDefault();

    if (!editingCategory?.name.trim() || !editingCategory?.description.trim()) {
      toast.warning("Please fill all fields");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axiosInstance.put(
        `${catalogCreate.CATALOGPAGECREATE_API}/${editingCategory._id}`,
        editingCategory
      );
      const data = response.data;

      if (data.success) {
        toast.success("Category updated successfully");
        setEditingCategory(null);
        fetchCategories();
      } else {
        toast.error(data.message || "Failed to update category");
      }
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error(error.response?.data?.message || "Failed to update category");
    } finally {
      setIsLoading(false);
    }
  };

  // Delete category
  const handleDeleteCategory = async (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        setIsLoading(true);
        const response = await axiosInstance.delete(
          `${catalogCreate.CATALOGPAGECREATE_API}/${categoryId}`
        );
        const data = response.data;

        if (data.success) {
          toast.success("Category deleted successfully");
          fetchCategories();
        } else {
          toast.error(data.message || "Failed to delete category");
        }
      } catch (error) {
        console.error("Error deleting category:", error);
        toast.error(error.response?.data?.message || "Failed to delete category");
      } finally {
        setIsLoading(false);
      }
    }
  };
  // Start editing a category
  const startEditing = (category) => {
    setEditingCategory({ ...category });
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingCategory(null);
  };

  return (
    <div className="bg-richblack-800 min-h-screen text-richblack-5">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-electricblue">
          Category Management
        </h1>

        {/* Add/Edit Form */}
        <div className="bg-richblack-700 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-softteal">
            {editingCategory ? "Edit Category" : "Add New Category"}
          </h2>
          <form onSubmit={editingCategory ? handleUpdateCategory : handleAddCategory}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-richblack-300 mb-1">
                Category Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={editingCategory ? editingCategory.name : newCategory.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-richblack-600 bg-richblack-800 text-richblack-5 rounded-md focus:outline-none focus:ring-2 focus:ring-electricblue"
                placeholder="Enter category name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-richblack-300 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={editingCategory ? editingCategory.description : newCategory.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-richblack-600 bg-richblack-800 text-richblack-5 rounded-md focus:outline-none focus:ring-2 focus:ring-electricblue"
                placeholder="Enter category description"
                rows="3"
                required
              />
            </div>
            <div className="flex justify-end space-x-2">
              {editingCategory && (
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="px-4 py-2 bg-richblack-600 text-richblack-5 rounded-md hover:bg-richblack-400 transition-colors"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-electricblue text-richblack-800 font-semibold rounded-md hover:bg-softteal transition-colors disabled:bg-richblack-400"
              >
                {isLoading
                  ? "Processing..."
                  : editingCategory
                  ? "Update"
                  : "Add"}{" "}
                Category
              </button>
            </div>
          </form>
        </div>

        {/* Categories List */}
        <div className="bg-richblack-700 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-softteal">
            Existing Categories
          </h2>
          {isLoading && !categoriesList.length ? (
            <div className="text-center py-8 text-richblack-300">
              Loading categories...
            </div>
          ) : categoriesList.length === 0 ? (
            <div className="text-center py-8 text-richblack-300">
              No categories found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-richblack-600">
                <thead className="bg-richblack-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-richblack-400 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-richblack-400 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-richblack-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-richblack-800 divide-y divide-richblack-700">
                  {categoriesList.map((category) => (
                    <tr key={category._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-richblack-5">
                          {category.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-richblack-300">
                          {category.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => startEditing(category)}
                          className="text-electricblue hover:text-softteal mr-4"
                          disabled={isLoading}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(category._id)}
                          className="text-red-500 hover:text-red-700"
                          disabled={isLoading}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddCatalog;