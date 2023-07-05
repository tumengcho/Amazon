import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import MessageBox from '../components/MessageBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/esm/Container';
export default function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const navigate = useNavigate();

  const updateCartHandler = (item, quantity) => {
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };
  return (
    <Container>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row className="mt-5">
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col className="text-center" md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      />
                      <Link className="lien" to={`/burgers/${item.slug}`}>
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={3}>
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === 10}
                      >
                        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                      </Button>
                    </Col>
                    <Col md={3}>{item.price}$</Col>
                    <Col md={2}>
                      <Button
                        variant="light"
                        onClick={() => removeItemHandler(item)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          {cartItems.length > 0 ? (
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>
                      Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}
                      {'  '}
                      items) : <br></br>
                      {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}$
                    </h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button
                        style={{ backgroundColor: ' #adeb13' }}
                        type="button"
                        variant="primary"
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler}
                      >
                        Proceed to Checkout
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          ) : (
            <span></span>
          )}
        </Col>
      </Row>
    </Container>
  );
}
