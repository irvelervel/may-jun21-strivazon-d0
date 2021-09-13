import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

const Cart = ({ cart, setCart }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {cart.map((book, i) => (
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() => {
              let newCart = cart.filter((el, index) => i !== index)
              setCart(newCart)
            }}>
              <FaTrash />
            </Button>
            <img
              className="book-cover-small"
              src={book.imageUrl}
              alt="book selected"
            />
            {book.title}
          </li>
        ))}
      </ul>
    </Col>
    <Row>
      <Col sm={12} className="font-weight-bold">
        TOTAL:{" "}
        {cart.length > 0 ? cart.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue.price),
          0
        ) : 'Cart is empty!'}
      </Col>
    </Row>
  </Row>
);

export default Cart;
