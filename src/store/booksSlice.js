import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: []
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    }
  }
});

export const { addBook, setBooks } = bookSlice.actions;
export default bookSlice.reducer;
