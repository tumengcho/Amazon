import Slider from '../Slider';
import { Helmet } from 'react-helmet-async';
function HomeScreen() {
  return (
    <div className="main">
      <Helmet>
        <title>Moxom</title>
      </Helmet>
      <div className="RecVert"></div>
      <div className="RecRouge1"></div>
      <div className="RecRouge2"></div>
      <div className="crispy">
        <div className="lettre">
          <div className="surplus1"></div>
          <h1>C</h1>
        </div>
        <div className="lettre">
          <h1>R</h1>
        </div>
        <div className="lettre">
          <h1 style={{ marginTop: '-75%' }}>I</h1>
        </div>
        <div className="lettre">
          <h1>S</h1>
        </div>
        <div className="lettre">
          <h1>P</h1>
        </div>
        <div className="lettre">
          <h1>Y</h1>
          <div className="surplus2"></div>
        </div>
      </div>
      <div className="Hamburger">
        <h1>HAMBURGER</h1>
      </div>
      <div className="Image">
        <img
          src={require('../Images/hamburger-removebg-preview.png')}
          style={{ width: '100%', height: '100%' }}
          alt=""
        />
      </div>
      <div
        class="Rec2 row container-fluid"
        style={{ margin: '0', padding: '0' }}
      >
        <div class="Numéro col-3 row">
          <h1 className="col-md-6">01</h1>
          <h2 className="col-md-6">DELIGHTFUL</h2>
        </div>
        <div class="Numéro col-3 row">
          <h1 className="col-md-6">02</h1>
          <h2 className="col-md-6">ONLY 12.99</h2>
        </div>
        <div class="Numéro col-3 row">
          <h1 className="col-md-6">03</h1>
          <h2 className="col-md-6">CRISPY</h2>
        </div>
        <div class="Numéro col-3 row">
          <h1 className="col-md-6">04</h1>
          <h2 className="col-md-6">FRENCH FRIES</h2>
        </div>
      </div>
      <Slider />
      <div class="delivery container-fluid">
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.484)',
            width: '100%',
            height: '100%',
            paddingTop: '7%',
          }}
        >
          <div class="container intDeliv text-center align-items-center">
            <div style={{ height: '40%', paddingLeft: '13%' }} class="row">
              <h3 class="fDelivery mt-3 col-6">Free Delivery</h3>
            </div>
            <div style={{ height: '25%', marginBottom: '5%' }}>
              <h1 class="sDelivery">SANDWITCH DAY</h1>
            </div>
            <div style={{ height: '25%' }}>
              <button class="bDelivery btn btn-success rounded-pill">
                <h3 className="bText">ORDER NOW</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class=" avantages row text-center align-items-center">
        <div class="col-md-3 my-4">
          <div>
            {' '}
            <img
              class="imgAvan"
              src={require('../Images/take-away.png')}
              alt=""
            />
          </div>
          <div class="pt-3">
            <h3 style={{ padding: '0', margin: '0' }}>FRESH FOOD</h3>
          </div>
          <div></div>

          <div>
            <p class="textAvant">
              We use only the best ingredients to cook the tasty fresh food for
              you.
            </p>
          </div>
        </div>

        <div class="col-md-3 my-4">
          <div>
            <img class="imgAvan" src={require('../Images/clock.png')} alt="" />
          </div>
          <div class="pt-3">
            <h3 style={{ padding: '0', margin: '0' }}>FAST DELIVERY</h3>
          </div>
          <div></div>
          <div>
            <p class="textAvant">
              Everything you order at Moxom will be quickly delivered to your
              door.
            </p>
          </div>
        </div>

        <div class="col-md-3 my-4">
          <div>
            <img class="imgAvan" src={require('../Images/chef.png')} alt="" />
          </div>
          <div class="pt-3">
            <h3 style={{ padding: '0', margin: '0' }}>EXPERIENCED CHEFS</h3>
          </div>
          <div></div>
          <div>
            <p class="textAvant">
              Our staff consists of chefs and cooks with years of experience.
            </p>
          </div>
        </div>

        <div class="col-md-3 my-4">
          <div>
            <img class="imgAvan" src={require('../Images/burger.png')} alt="" />
          </div>
          <div class="pt-3">
            <h3 style={{ padding: '0', margin: '0' }}>UNIQUE BURGERS</h3>
          </div>
          <div></div>
          <div>
            <p class="textAvant">
              In our menu you'll find a wide variety of dishes, desserts, and
              drinks.
            </p>
          </div>
        </div>
      </div>{' '}
      */
    </div>
  );
}
export default HomeScreen;
