import React, { useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

import { Container, Header } from "../components/shared";
import BookSearchForm from "../components/bookSearchForm";
import Loader from "../components/loader";
import BooksList from "../components/booksList";

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 778px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoText = styled.h3`
  margin: 0;
`;

const HeaderSearchForm = styled.div`
  margin-left: auto;
`;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_BASE_URL}?q=${searchTerm}`);
      setBooks(result.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoText>Bookie</LogoText>
          <HeaderSearchForm>
            <BookSearchForm
              onSubmitHandler={onSubmitHandler}
              onInputChange={onInputChange}
              searchTerm={searchTerm}
              error={error}
            />
          </HeaderSearchForm>
        </HeaderContainer>
      </Header>
      <Container>
        <Loader loading={loading}>
          fetching books for "<strong>{searchTerm}</strong>"
        </Loader>
        <BooksList books={books} />
      </Container>
    </>
  );
};

export default SearchPage;
