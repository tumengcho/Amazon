import './css/style.css';
import './css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider';
function App() {
  return (
    <body>
      <nav className="navi">
        <div className="Moxom">
          <span className="lbraquet"></span>
          <span>
            <h1 className="logoM mt-3">MOXOM</h1>
          </span>
          <span className="rbraquet"></span>
        </div>
        <div className="items">
          <ul>
            <li>
              <h5>ABOUT</h5>
            </li>
            <li>
              <h5>SERVICES</h5>
            </li>
            <li>
              <h5>GALERY</h5>
            </li>
            <li>
              <h5>PRICING</h5>
            </li>
            <li>
              <h5>CONTACT</h5>
            </li>
            <li>
              <button className="b1">TAKE ORDER</button>
              <button className="b2">
                <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
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
            <h1>L</h1>
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
            src={require('./Images/hamburger-removebg-preview.png')}
            style={{ width: '100%', height: '100%' }}
            alt=""
          />
        </div>

        <div class="Rec1">
          <div class="Rec2">
            <div class="Numéro">
              <h1 style={{ textAlign: 'end' }}>01</h1>
              <h2>DELIGHTFUL</h2>
            </div>
            <div class="Numéro">
              <h1 style={{ textAlign: 'end' }}>02</h1>
              <h2>ONLY 12.99</h2>
            </div>
            <div class="Numéro">
              <h1 style={{ textAlign: 'end' }}>03</h1>
              <h2>CRISPY</h2>
            </div>
            <div class="Numéro">
              <h1 style={{ textAlign: 'end' }}>04</h1>
              <h2>FRENCH FRIES</h2>
            </div>
          </div>
        </div>

        <Slider />

        <div class="delivery">
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.484)',
              width: '100%',
              height: '100%',
              paddingTop: '7%',
            }}
          >
            <div class="container intDeliv text-center align-items-center">
              <div style={{ height: '30%', paddingLeft: '13%' }} class="row">
                <img
                  class="col-3"
                  src={require('./Images/Sans titre(1).png')}
                  style={{ width: '150px', padding: '0' }}
                  alt=""
                />
                <h3 class="fDelivery mt-3 col-6">Free Delivery</h3>
                <img
                  class="col-3"
                  src={require('./Images/Sans titre(1).png')}
                  style={{ width: '150px', padding: '0' }}
                  alt=""
                />
              </div>
              <div style={{ height: '45%' }}>
                <h1 class="sDelivery">SANDWITCH DAY</h1>
              </div>
              <div style={{ height: '25%' }}>
                <button class="bDelivery btn btn-success rounded-pill">
                  <h3>ORDER NOW</h3>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="avantages row text-center align-items-center">
          <div class="col-3">
            <div>
              <img
                class="imgAvan"
                src={require('./Images/take-away.png')}
                alt=""
              />
            </div>
            <div class="pt-3">
              <h3 style={{ padding: '0', margin: '0' }}>FRESH FOOD</h3>
            </div>
            <div>
              <img
                src={require('./Images/Sans titre(1).png')}
                style={{ minWidth: '250px', maxHeight: '50px' }}
                alt=""
              />
            </div>
            <div>
              <p class="textAvant">
                We use only the best ingredients to cook the tasty fresh food
                for you.
              </p>
            </div>
          </div>

          <div class="col-3">
            <div>
              <img class="imgAvan" src={require('./Images/clock.png')} alt="" />
            </div>
            <div class="pt-3">
              <h3 style={{ padding: '0', margin: '0' }}>FAST DELIVERY</h3>
            </div>
            <div>
              <img
                src={require('./Images/Sans titre(1).png')}
                style={{ minWidth: '250px', maxHeight: '50px' }}
                alt=""
              />
            </div>
            <div>
              <p class="textAvant">
                Everything you order at Moxom will be quickly delivered to your
                door.
              </p>
            </div>
          </div>

          <div class="col-3">
            <div>
              <img class="imgAvan" src={require('./Images/chef.png')} alt="" />
            </div>
            <div class="pt-3">
              <h3 style={{ padding: '0', margin: '0' }}>EXPERIENCED CHEFS</h3>
            </div>
            <div>
              <img
                src={require('./Images/Sans titre(1).png')}
                style={{ minWidth: '250px', maxHeight: '50px' }}
                alt=""
              />
            </div>
            <div>
              <p class="textAvant">
                Our staff consists of chefs and cooks with years of experience.
              </p>
            </div>
          </div>

          <div class="col-3">
            <div>
              <img
                class="imgAvan"
                src={require('./Images/burger.png')}
                alt=""
              />
            </div>
            <div class="pt-3">
              <h3 style={{ padding: '0', margin: '0' }}>UNIQUE BURGERS</h3>
            </div>
            <div>
              <img
                src={require('./Images/Sans titre(1).png')}
                style={{ minWidth: '250px', maxHeight: '50px' }}
                alt=""
              />
            </div>
            <div>
              <p class="textAvant">
                In our menu you'll find a wide variety of dishes, desserts, and
                drinks.
              </p>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default App;
