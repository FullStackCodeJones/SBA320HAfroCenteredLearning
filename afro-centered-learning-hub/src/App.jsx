import React, { useState, useEffect } from "react";
import { fetchBooks } from "./api"; // Importing the function that fetches book data from the API

const App = () => {
  // State variables
  const [books, setBooks] = useState([]); // State to store the books data
  const [loading, setLoading] = useState(true); // State to track the loading status
  const [error, setError] = useState(null); // State to store error messages

  // Function to load books from the API
  const loadBooks = async () => {
    try {
      setLoading(true); // Set loading to true before starting the fetch process
      const booksData = await fetchBooks(); // Fetch books data from the API
      setBooks(booksData); // Update the books state with the fetched data
      setError(null); // Clear any previous error message
    } catch (error) {
      setError("Failed to fetch data from Open Library API"); // Set an error message if something goes wrong
    } finally {
      setLoading(false); // Set loading to false after fetch process completes (success or failure)
    }
  };

  // useEffect to fetch books when the component mounts
  useEffect(() => {
    loadBooks(); // Call the loadBooks function
  }, []); // Empty dependency array ensures this runs only once when the component is mounted

  // Display loading state
  if (loading) {
    return <div>Loading...</div>; // Show "Loading..." while fetching data
  }

  // Display error state with a retry button
  if (error) {
    return (
      <div>
        <p>{error}</p> {/* Display the error message */}
        <button onClick={loadBooks}>Retry</button>{" "}
        {/* Retry button to attempt fetching again */}
      </div>
    );
  }

  // Render the list of books
  return (
    <div>
      <h1>
        Education That Enriches Culture and Knowledge of Self for Brown Children
        Everywhere!
      </h1>
      <ul>
        {/* Loop through the books and display each one */}
        {books.map((book) => (
          <li key={book.key}>
            <h2>{book.title}</h2>
            <p>{book.first_publish_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
