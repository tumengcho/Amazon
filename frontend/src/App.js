import './css/style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/styles.css';
import Badge from 'react-bootstrap/Badge';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screen/CartScreen';
import SignInScreen from './screen/SignInScreen';
import ShippingScreen from './screen/ShippingScreen';
import SignUpScreen from './screen/SignUpScreen';
import PaymentMethodScreen from './screen/PaymentMethodScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';
function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
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
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="lien" to="/signin">
                    <h5 data-bs-dismiss="offcanvas">SIGN IN</h5>
                  </Link>
                )}
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
                <h5></h5>
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
              <h5>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="lien" to="/signin">
                    SIGN IN
                  </Link>
                )}
              </h5>
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
        </div>
      </nav>
      <Routes>
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentMethodScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/burgers/:slug" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
