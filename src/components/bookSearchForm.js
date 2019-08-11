import React from "react";
import styled from "@emotion/styled";

import ErrorText from "./errorText";

const Input = styled.input`
  outline: 0;
  padding: 0.6rem 1rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 3px;
  min-width: 280px;
  &:focus,
  &:active {
    border-color: #85b7d9;
  }
  @media (max-width: 778px) {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  background-color: #2185d0;
  color: #ffffff;
  text-shadow: none;
  background-image: none;
  padding: 0.6rem 1.5rem;
  margin-left: 15px;
  border-radius: 3px;
  cursor: pointer;
  @media (max-width: 778px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const BookSearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        type="search"
        placeholder="Search for books"
        value={searchTerm}
        onChange={onInputChange}
        required
      />
      <Button type="submit">Search</Button>
      {error && (
        <ErrorText>Some error occurred, while fetching books API</ErrorText>
      )}
    </form>
  );
};

export default BookSearchForm;
