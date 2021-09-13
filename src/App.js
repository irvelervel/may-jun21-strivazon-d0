import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import CartIndicator from './components/CartIndicator'
import BookStore from './components/BookStore'
import Cart from './components/Cart'
import { Route, Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const App = () => {
  // we need to implement a state here
  // 1) convert App to a class component in order to create a state={}
  // 2) use a useState hook to save this state property
  // let's go with n.2

  const [cart, setCart] = useState([])

  return (
    <Router>
      <Container>
        <Row>
          <Col sm={12} className="text-center background-div">
            <Link to="/">
              <h1>Strivazon Book Store</h1>
            </Link>
          </Col>
          <CartIndicator cartLength={cart.length} />
        </Row>
        <hr />
        <Route path="/" exact render={() => <BookStore cart={cart} setCart={setCart} />} />
        <Route path="/cart" exact render={(routerProps) => <Cart {...routerProps} cart={cart} setCart={setCart} />} />
        {/* if you declare a Route and use the render prop, the routerProps do not get passed automatically anymore */}
      </Container>
    </Router>
  )
}

export default App
