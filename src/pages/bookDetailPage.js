import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BookDetail from "../components/bookDetail";
import Loader from "../components/loader";
import ErrorText from "../components/errorText";

const BookDetailPage = ({ match }) => {
  const {
    params: { bookId }
  } = match;
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes`;
    const fetchBook = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await axios.get(`${API_BASE_URL}/${bookId}`);
        setBook(result.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    // Call the API
    fetchBook();
  }, [bookId]);

  return (
    <>
      <Link to={`/`}>Go back to search books</Link>
      <Loader loading={loading}>
        loading book detail for book ID <strong>{bookId}</strong>
      </Loader>
      {error && (
        <ErrorText>Some error occurred, while fetching books API</ErrorText>
      )}
      {book && <BookDetail book={book} />}
    </>
  );
};

export default BookDetailPage;
