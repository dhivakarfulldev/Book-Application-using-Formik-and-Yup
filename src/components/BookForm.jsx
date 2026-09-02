import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const BookForm = ({ setclose,  addbook }) => {
  const formik = useFormik({
    initialValues: {
      booktitle: "",
      ISBNnumber: "",
      date: "",
      author_name: "",
      date_of_birth: "",
      biography: "",
    },
    validationSchema: Yup.object({
      booktitle: Yup.string().required("Book Title Required"),
      ISBNnumber: Yup.number()
        .typeError("ISBN must be Number")
        .required("ISBN Number Required")
        .min(100000, "Number must be 6 Numbers")
        .max(9999999999, "Number must be within 10 Numbers"),
      date: Yup.string().required("Date Required"),
      author_name: Yup.string().required("Author Name Required"),
      date_of_birth: Yup.string().required("Date of Birth Required"),
      biography: Yup.string()
        .required("Biography Required")
        .min(5, "Please enter at least 5 characters"),
    }),
    onSubmit: (values) => {
      
      addbook(values);
      toast.success('Successfully Added!')
       setclose(false);
   
    },
  });

  return (
    <div className="book-form">
      <div className="close-icon">
        <i
          className="fa-regular fa-circle-xmark"
          onClick={() => setclose(false)}
        ></i>
      </div>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="book-details">
          <h4>Book Details</h4>
          {formik.touched.booktitle && formik.errors.booktitle ? (
            <p className="form-error">{formik.errors.booktitle}</p>
          ) : null}
          <input
            type="text"
            placeholder="Book-title"
            {...formik.getFieldProps("booktitle")}
          />
          {formik.touched.ISBNnumber && formik.errors.ISBNnumber ? (
            <p className="form-error">{formik.errors.ISBNnumber}</p>
          ) : null}
          <input
            type="text"
            placeholder="ISBN number"
            {...formik.getFieldProps("ISBNnumber")}
          />
          {formik.touched.date && formik.errors.date ? (
            <p className="form-error">{formik.errors.date}</p>
          ) : null}
          <label htmlFor="">Publication Date👇</label>
          <input type="date" {...formik.getFieldProps("date")} />
        </div>
        <hr />
        <div className="author-details">
          <h4>Author Details</h4>

          {formik.touched.author_name && formik.errors.author_name ? (
            <p className="form-error">{formik.errors.author_name}</p>
          ) : null}
          <input
            type="text"
            placeholder="Author-name"
            {...formik.getFieldProps("author_name")}
          />
          {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
            <p className="form-error">{formik.errors.date_of_birth}</p>
          ) : null}
          <label htmlFor="">Date of birth👇</label>
          <input type="date" {...formik.getFieldProps("date_of_birth")} />
          {formik.touched.biography && formik.errors.biography ? (
            <p className="form-error">{formik.errors.biography}</p>
          ) : null}
          <textarea
            name=""
            id=""
            rows={5}
            cols={10}
            placeholder="short biography"
            {...formik.getFieldProps("biography")}
          ></textarea>
        </div>
        <div className="form-btn">
          <button type="submit">Add Book</button>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </form>
      
    </div>
  );
};

export default BookForm;
