import React, { useSTate, useEffect } from "react";
import { fetchBooks } from "./api"; // Importing the function that I created in api.js

const App = () => {
  const [books, setBooks] = useState([]); //State where the books will store
  const [loading, setLoading] = useState(true); // State to show loading status
  const [error, setError] = useState(null); // State to show error message

  useEffect(() => {
    // This function will be run when the component is first loaded
    const loadBooks = async () => {
      try {
        const booksData = await fetchBooks(); //Fetch Books from the API
        setBooks(booksData); //Sets the books data to the state
        setLoading(false); //Set loading to false since the data is fetched
      } catch (error) {
        setError("Failed to Fetch Data from Open Library API"); //Simply sets the eror if something goes wrong
        setLoading(false); //Set loading to false after error
      }
    };
    loadBooks(); //Call the loadBooks function
  }, []); // The empty array means that this effect only will run once when the component loads

  if (error) {
    return <div>{error}</div>; //To Display Loading while waiting for Data
  }

  return (
    <div>
      <h1>
        Education That Enriches Culture and Knowledge of Self for Brown Children
        Everywhere!
      </h1>
      <ul>
        {/* Loop Through The Books And Display Them */}
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
