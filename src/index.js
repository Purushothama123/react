import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import { Book } from "./Book";

const BooksList = () => {
  return (
    <>
      <h1>Amazon best sellers</h1>
      <section className="bookslist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} no={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BooksList />);
