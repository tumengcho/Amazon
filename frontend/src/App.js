import './css/style.css';
import './css/styles.css';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screen/CartScreen';
import SignInScreen from './screen/SignInScreen';
function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <nav className="navi">
        <Link className="Moxom" to="/">
          <span className="lbraquet"></span>
          <span>
            <h1 className="logoM mt-3">MOXOM</h1>
          </span>
          <span className="rbraquet"></span>
        </Link>
        <div className="items-mobile">
          <a
            class="btn btn-primary"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <h1>
              <i class="fa-solid fa-bars"></i>
            </h1>
          </a>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                TEST
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
            </div>
          </div>
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
              <Link to="/cart">
                <button className="b2 position-relative">
                  <i class="fa-solid fa-bag-shopping"></i>
                  {cart.cartItems.length > 0 && (
                    <Badge
                      className="position-absolute top-0 end-0"
                      pill
                      bg="danger"
                    >
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </button>
              </Link>
            </li>
          </ul>{' '}
          *
        </div>
      </nav>
      <Routes>
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/burgers/:slug" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
