import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartIndicator = ({ history, cartLength }) => (
  <div className="ml-auto mt-2">
    <Button color="primary" onClick={() => history.push("/cart")}>
      <FaShoppingCart />
      <span className="ml-2">{cartLength > 0 ? cartLength : 'NO ITEMS'}</span>
    </Button>
  </div>
);

export default withRouter(CartIndicator);
