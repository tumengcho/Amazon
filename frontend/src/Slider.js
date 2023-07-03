import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './css/styles.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel.min.js';
import data from './data.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
  /* Produit */
  const owlCarouselRef = useRef(null);
  const [burger, setBurgers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/burgers');
      setBurgers(result.data);
    };

    fetchData();
  }, []);
  if (burger.length >= 4) {
    if (owlCarouselRef.current) {
      window.$(owlCarouselRef.current).owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        navText: [
          "<i class='fa fa-angle-left' style='background-color:white;'></i>",
          "<i class='fa fa-angle-right' style='background-color:white;'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      });
    } else {
      console.log('oui');
    }
  }

  return (
    <section id="slider" className="pt-5">
      {/* <Container>
        
        
          <div ref={owlCarouselRef} className="owl-carousel">
            {burger.map((product) => (
              
            ))}
          </div>
        </div>
      </Container> */}
      <Container>
        <h1 className="text-center py-3 menu">
          <b>OUR MENU</b>
        </h1>
        <div className="slider pt-5">
          <OwlCarousel
            items={3}
            className="owl-carousel"
            loop
            nav
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
            {burger.map((product) => (
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
                  style={{ color: '#ce2a2a', fontFamily: 'fantasy' }}
                >
                  {product.price}$
                </h1>
                <button class="info mb-3">
                  <Link className="lien" to={`/product/${product.slug}`}>
                    BUY NOW
                  </Link>
                </button>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </Container>
    </section>
  );
};

export default Slider;
