import './css/style.css';
import './css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
function App() {
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
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/:slug" element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
