import { useState } from "react";


const BookCard = ({ book, editbook , deletebook }) => {
  const [isshow, setisShow] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [books, setbook] = useState({
    bookname: book.booktitle,
    isbnnumber: book.ISBNnumber,
    publicationdate: book.date,
    authorname: book.author_name,
    date_of_birth: book.date_of_birth,
    biography: book.biography,
    bookid: book.id,
  });
 
  
  const handleEditclick = () => {
    editbook(books);
    setEdit(false);
  };
  const handledeleteclick = () => {
    deletebook(book.id)
  };
  return (
    <>
      <div className="container">
        <div className="card-container">
          <div className="card-content">
            {isEdit ? (
              <>
                {" "}
                <input
                  type="text"
                  placeholder="Enter Book Name"
                  value={books.bookname}
                  onChange={(e) =>
                    setbook({ ...books, bookname: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Enter ISBN Number"
                  value={books.isbnnumber}
                  onChange={(e) =>
                    setbook({ ...books, isbnnumber: e.target.value })
                  }
                />
                <input
                  type="date"
                  placeholder="Enter Publication Date"
                  value={books.publicationdate}
                  onChange={(e) =>
                    setbook({ ...books, publicationdate: e.target.value })
                  }
                />
              </>
            ) : (
              <>
                <h4>Book Name: {book.booktitle}</h4>
                <h4>ISBN Number: {book.ISBNnumber}</h4>
                <h4>Publication Date: {book.date}</h4>
              </>
            )}
          </div>
          <div className="card-btn">
            <p className="show-btn" onClick={() => setisShow(!isshow)}>
              Show More
            </p>
            <div className="card-btns">
              {isEdit ? (
                <button className="update-btn" onClick={handleEditclick}>
                  Update
                </button>
              ) : (
                <button className="edit-btn" onClick={() => setEdit(true)}>
                  Edit
                </button>
              )}
              <button className="delete-btn" onClick={handledeleteclick}>
                Delete
              </button>
            </div>
          </div>
        </div>
        {isshow && (
          <div className="card-container">
            <div className="card-content">
              {isEdit ? (
                <>
                  {" "}
                  <h4>Author Details👇</h4>
                  <input
                    type="text"
                    placeholder="Enter Author Name"
                    value={books.authorname}
                    onChange={(e) =>
                      setbook({ ...books, authorname: e.target.value })
                    }
                  />
                  <input
                    type="date"
                    placeholder="Enter Date of Birth"
                    value={books.date_of_birth}
                    onChange={(e) =>
                      setbook({ ...books, date_of_birth: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Enter Biography"
                    value={books.biography}
                    onChange={(e) =>
                      setbook({ ...books, biography: e.target.value })
                    }
                  />
                </>
              ) : (
                <>
                  <h4>Author Details👇</h4>
                  <h4>Author Name: {book.author_name} </h4>
                  <h4>Date of Birth: {book.date_of_birth} </h4>
                  <h4>BioGraphy: {book.biography}</h4>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookCard;
