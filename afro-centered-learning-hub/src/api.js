import axios from "axios";
// Here I am importing Axios so that it's available for use to fetch the data

// This function will fetch books about Africa from the Open Libraey API
export const fetchBooks = async () => {
  try {
    const response = await axios.get(
      "https://openlibrary.org/subjects/africa.json"
    );
    return response.data.works; // Extracting the book data from the response
  } catch (error) {
    throw new Error("Error Fetching Dtat from Open Library");
  }
};
