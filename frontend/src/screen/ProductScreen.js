import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useReducer } from 'react';
import logger from 'use-reducer-logger';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import { Store } from '../Store';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, burger: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  const navigate = useNavigate();

  const [{ loading, error, burger }, dispatch] = useReducer(logger(reducer), {
    burger: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/burgers/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fetchData();
  }, [slug]);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItems = cart.cartItems.find((x) => x._id === burger._id);
    const quantity = existItems ? existItems.quantity + 1 : 1;

    ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...burger, quantity } });
    navigate('/cart');
  };

  return loading ? (
    <div class="produit text-center">
      <div class="intProduit container">
        <h1>Loading...</h1>
      </div>
    </div>
  ) : error ? (
    <div class="produit text-center">
      <div class="intProduit container">
        <MessageBox variant={'danger'}>{error}</MessageBox>
      </div>
    </div>
  ) : (
    <Container className="pt-md-5">
      <Row className="align-items-center text-md-start text-center pt-5">
        <Col md={6}>
          <Card.Img
            variant="top"
            src={burger.image}
            className="img-fluid rounded img-thumbnail"
          />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item className="py-3">
              <Card.Title>
                <h1 className="product-title">{burger.name}</h1>{' '}
              </Card.Title>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3 className="product-price">{burger.price} $</h3>
            </ListGroup.Item>
            <ListGroup.Item className="py-3">
              <div>
                <div class="tabs">
                  <input
                    type="radio"
                    class="tabs__radio"
                    name="tabs-example"
                    id="tab1"
                    checked
                  />
                  <label for="tab1" class="tabs__label">
                    <span style={{ fontSize: '1.1em' }}>DESCRIPTION</span>
                  </label>
                  <div class="tabs__content">{burger.description}</div>
                  <input
                    type="radio"
                    class="tabs__radio"
                    name="tabs-example"
                    id="tab2"
                  />
                  <label for="tab2" class="tabs__label">
                    <span style={{ fontSize: '1.1em' }}>DELIVERY</span>
                  </label>
                  <div class="tabs__content">CONTENT for Tab #2</div>
                </div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="py-4">
              <Row className="align-items-center text-center ">
                <Col>
                  <select
                    class="form-select text-center rounded-pill"
                    aria-label="Default select example"
                    style={{
                      width: '80%',
                      display: 'inline-block',
                    }}
                  >
                    <option selected>Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </Col>
                <Col>
                  <Button
                    className="rounded-pill"
                    onClick={addToCartHandler}
                    style={{ width: '80%', backgroundColor: ' #adeb13' }}
                  >
                    Order Online
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
    /*  <div class="produit text-start">
      <div class="intProduit container">
        <div class="row rangé">
          <div class="col-md-6 align-self-center">
            <img class="imgProd" src={burger.image} alt="" />
          </div>
          <div
            class="col-md-6"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.200)',
              maxHeight: '100%',
            }}
          >
            <div class="col">
              <Helmet>
                <title>{burger.name}</title>
              </Helmet>
              <h1 class="product-title">{burger.name}</h1>
            </div>
            <div class="col">
              <hr />
            </div>
            <div class="col my-4">
              <h3 class="product-price">
                {burger.price}$
                <span class="product-logo rounded-pill">
                  <i class="fa-solid fa-fire product-logo"></i>
                </span>
              </h3>
            </div>
            <div class="col py-2">
              <div class="tabs">
                <input
                  type="radio"
                  class="tabs__radio"
                  name="tabs-example"
                  id="tab1"
                  checked
                />
                <label for="tab1" class="tabs__label">
                  <span style={{ fontSize: '1.1em' }}>DESCRIPTION</span>
                </label>
                <div class="tabs__content">{burger.description}</div>
                <input
                  type="radio"
                  class="tabs__radio"
                  name="tabs-example"
                  id="tab2"
                />
                <label for="tab2" class="tabs__label">
                  <span style={{ fontSize: '1.1em' }}>DELIVERY</span>
                </label>
                <div class="tabs__content">CONTENT for Tab #2</div>
              </div>
            </div>
            <div class="col">
              <select
                class="form-select text-center rounded-pill col-6 mx-md-5 mx-xs-2"
                aria-label="Default select example"
                style={{
                  width: '30%',
                  display: 'inline-block',
                  height: '70%',
                }}
              >
                <option selected>Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <button
                
              >
                ORDER ONLINE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> */
  );
}

export default ProductScreen;
