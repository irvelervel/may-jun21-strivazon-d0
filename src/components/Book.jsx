import { Card } from "react-bootstrap";

const Book = ({ book, changeBook, bookSelected }) => (
  <Card
    // bookSelected can be null or can be a valid book object
    // ? will check for a falsy value (null, undefined, '')
    className={bookSelected?.id === book.id ? "border-thick mt-3" : "mt-3"}
    // OPTIONAL CHAINING
    onClick={() => changeBook(book)}
    style={{ cursor: "pointer" }}
  >
    <Card.Body className="d-flex">
      <img className="book-image" src={book.imageUrl} alt="book cover" />
      <div>
        <Card.Text className="font-weight-bold">{book.title}</Card.Text>
        <p>{book.price}</p>
      </div>
    </Card.Body>
  </Card>
);

export default Book;

