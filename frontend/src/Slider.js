import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import './css/styles.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel.min.js';
import data from './data';

const Slider = () => {
  const owlCarouselRef = useRef(null);

  useEffect(() => {
    if (owlCarouselRef.current) {
      window.$(owlCarouselRef.current).owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
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
    }
  }, []);

  return (
    <section id="slider" className="pt-5">
      <Container>
        <h1 className="text-center py-3 menu">
          <b>OUR MENU</b>
        </h1>
        <div className="slider pt-5">
          <div ref={owlCarouselRef} className="owl-carousel">
            {data.products.map((product) => (
              <div key={product.slug} class="slider-card text-center pt-5">
                <img src={product.image} alt="" />
                <h2 class="text-center card-title py-1">{product.name}</h2>
                <div class="info">
                  <div class="card-body text-center py-2">
                    <p class="text-center card-text">{product.description}</p>
                  </div>
                </div>
                <h1 class="text-center pb-3">{product.price}$</h1>
                <button class="info mb-3">
                  <a className="bCommand" href={`/command/${product.slug}`}>
                    BUY NOW
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Slider;
