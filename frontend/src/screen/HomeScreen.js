import Container from 'react-bootstrap/esm/Container';
import Slider from '../Slider';
import { Helmet } from 'react-helmet-async';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
function HomeScreen() {
  return (
    <div>
      <Helmet>
        <title>Moxom</title>
      </Helmet>
      <div className="main">
        <img src={require('../Images/CRISPY.png')} alt="lll" />
      </div>
      <div
        class="Rec2 row container-fluid"
        style={{ margin: '0', padding: '0' }}
      >
        <div class="Numéro col-3 row">
          <h1 className="col-md-6">01</h1>
          <h2 className="col-md-6">DELICIOUS</h2>
        </div>
        <div class="Numéro col-3 row">
          <h1 className="col-md-6">02</h1>
          <h2 className="col-md-6">ONLY 12.99</h2>
        </div>
        <div class=" col-3 row Numéro">
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
          <Container className="intDeliv text-center align-items-center pt-5">
            <Row>
              <Col>
                <ListGroup>
                  <ListGroup.Item>
                    <div style={{ height: '25%', marginBottom: '5%' }}>
                      <h1 class="sDelivery">SANDWITCH DAY</h1>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div>
                      <button class=" btn btn-success rounded-pill w-100">
                        <h3 className="bText">ORDER NOW</h3>
                      </button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
          {/* <div class="container ">
            <div
              style={{ height: '40%', paddingLeft: '13%' }}
              class="row"
            ></div>
            <div style={{ height: '25%', marginBottom: '5%' }}>
              <h1 class="sDelivery">SANDWITCH DAY</h1>
            </div>
            <div style={{ height: '25%' }}>
              <button
                class="bDelivery btn btn-success rounded-pill"
                style={{ width: '30%', height: '60%' }}
              >
                <h3 className="bText">ORDER NOW</h3>
              </button>
            </div>
          </div> */}
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
            <p class="textAvant py-3">
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
            <p class="textAvant py-3">
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
            <p class="textAvant py-3">
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
            <p class="textAvant py-3">
              In our menu you'll find a wide variety of dishes, desserts, and
              drinks.
            </p>
          </div>
        </div>
      </div>{' '}
    </div>
  );
}
export default HomeScreen;
