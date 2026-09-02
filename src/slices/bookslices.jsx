import { createSlice } from "@reduxjs/toolkit";

const bookslice = createSlice({
  name: "book",
  initialState: {
    books: [],
  },
  reducers: {
    getbook: (state, actions) => {
      state.books = actions.payload;
    },
    addBook: (state, actions) => {
      state.books = [...state.books, actions.payload];
    },
    updatebook: (state, actions) => {
      state.books = state.books.map((book) =>
        book.id === actions.payload.bookid
          ? {
              ...book,
              booktitle: actions.payload.bookname,
              ISBNnumber: actions.payload.isbnnumber,
              date: actions.payload.publicationdate,
              author_name: actions.payload.authorname,
              date_of_birth: actions.payload.date_of_birth,
              biography: actions.payload.biography,
            }
          : book,
      );
    },
    deleteBook: (state, actions) => {
      state.books = state.books.filter((book) => book.id !== actions.payload);
    },
  },
});
export const { getbook, addBook, updatebook, deleteBook } = bookslice.actions;
export default bookslice.reducer;
