import React, { useEffect, useReducer } from 'react';
import Container from 'react-bootstrap/Container';
import './css/styles.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel.min.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import logger from 'use-reducer-logger';
import MessageBox from './components/MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, burgers: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Slider = () => {
  /* Produit */
  const [{ loading, error, burgers }, dispatch] = useReducer(logger(reducer), {
    burgers: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/burgers');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };

    fetchData();
  }, []);

  return (
    <section id="slider" className="pt-5">
      <Container>
        <h1 className="text-center py-3 menu">
          <b>OUR MENU</b>
        </h1>
        <div className="slider pt-5">
          {loading ? (
            <div> loadingggg</div>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <OwlCarousel
              className="owl-carousel"
              loop
              nav
              dots={false}
              margin={10}
              center
              autoPlay
              autoplayTimeout={6000}
              autoplayHoverPause
              navText={[
                "<i class='fa fa-angle-left' style='background-color:white;'></i>",
                "<i class='fa fa-angle-right' style='background-color:white;'></i>",
              ]}
              responsive={{
                0: { items: 1 },
                600: { items: 1 },
                1000: { items: 3 },
              }}
            >
              {burgers.map((product) => (
                <div key={product.slug} class="slider-card text-center pt-5">
                  <img src={product.image} alt="" />
                  <h2
                    class="text-center card-title py-1"
                    style={{ color: '#fffb0b' }}
                  >
                    {product.name}
                  </h2>
                  <div class="info">
                    <div class="card-body text-center py-2">
                      <p class="text-center card-text">{product.description}</p>
                    </div>
                  </div>
                  <h1
                    class="text-center pb-3"
                    style={{
                      color: '#ce2a2a',
                      fontFamily:
                        "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                    }}
                  >
                    {product.price}$
                  </h1>
                  <button class="info mb-3">
                    <Link className="lien" to={`/burgers/${product.slug}`}>
                      BUY NOW
                    </Link>
                  </button>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Slider;
