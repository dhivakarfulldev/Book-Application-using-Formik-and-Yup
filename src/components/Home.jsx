import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import BookForm from "./BookForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { getbook, updatebook } from "../slices/bookslices";
import { addBook } from "../slices/bookslices";
import { deleteBook } from "../slices/bookslices";

const Home = () => {
  const bookstate = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const [isclose, setclose] = useState(false);
  const [isloader, setloader] = useState(true);

  const addbook = async (bookdata) => {
    try {
      const res = await axios.post("/Book", bookdata);
      dispatch(addBook(res.data));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const editbook = async (bookdata) => {
    try {
      dispatch(updatebook(bookdata));
      await axios.put(`/Book/${bookdata.bookid}`, {
        booktitle: bookdata.bookname,
        ISBNnumber: bookdata.isbnnumber,
        date: bookdata.publicationdate,
        author_name: bookdata.authorname,
        date_of_birth: bookdata.date_of_birth,
        biography: bookdata.biography,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deletebook = async (bookid) => {
    try {
      dispatch(deleteBook(bookid));
      await axios.delete(`/Book/${bookid}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const Getbooks = async () => {
      try {
        setloader(true);
        const res = await axios.get("/Book");
        dispatch(getbook(res.data));
      } catch (error) {
        console.log(error);
      } finally {
        setloader(false);
      }
    };
    Getbooks();
  }, []);
  return (
    <div className="home-container">
      <div className="btn">
        <button className="admin-btn">Admin Dashboard</button>
        <button className="book-btn" onClick={() => setclose(true)}>
          Add Book{" "}
        </button>
      </div>

      {isclose && (
        <div>
          <BookForm setclose={setclose} addbook={addbook} />
        </div>
      )}

      <div className="cards">
        {isloader ? (
          <p className="loader">Loading...</p>
        ) : (
          bookstate.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              editbook={editbook}
              deletebook={deletebook}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
