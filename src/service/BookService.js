import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
};

const BookService = {
  getAllBooks: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/books`, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch books");
    }
  },

  addBook: async (bookData) => {
    try {
      const formData = new FormData();
      for (const key in bookData) {
        formData.append(key, bookData[key]);
      }
      await axios.post(`${API_BASE_URL}/book`, formData, {
        headers: getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to add book");
    }
  },

  getBook: async (bookId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/book/${bookId}`, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch book");
    }
  },

  editBook: async (bookId, bookData) => {
    try {
      await axios.put(`${API_BASE_URL}/book/${bookId}`, bookData, {
        headers: getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to edit book");
    }
  },

  deleteBook: async (bookId) => {
    try {
      await axios.delete(`${API_BASE_URL}/book/${bookId}`, {
        headers: getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to delete book");
    }
  },

  downloadBookImage: (imagePath) => {
    const imageName = imagePath.split("/").pop();
    return `${API_BASE_URL}/book/download/${imageName}`;
  },
};

export default BookService;
