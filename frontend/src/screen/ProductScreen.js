import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useReducer } from 'react';
import logger from 'use-reducer-logger';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';
import { Store } from '../Store';

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
    <div class="produit text-start">
      <div class="intProduit container">
        <div class="row rangé">
          <div class="col-6">
            <img class="imgProd" src={burger.image} alt="" />
          </div>
          <div
            class="col-6"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.200)' }}
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
            <div class="col pb-4">
              <select
                class="form-select text-center rounded-pill col-6 mx-5 mt-5"
                aria-label="Default select example"
                style={{
                  width: '30%',
                  display: 'inline-block',
                  height: '75px',
                }}
              >
                <option selected>Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <button
                class="col-6 rounded-pill mx-5 mt-5 product-buy"
                style={{ width: '30%', height: '75px' }}
                onClick={addToCartHandler}
              >
                ORDER ONLINE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
