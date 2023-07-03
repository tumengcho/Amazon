import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <div class="produit text-start">
      <div class="intProduit container">
        <div class="row rangé">
          <div class="col-6">
            <img
              class="imgProd"
              src="../Images/hamb2-removebg-preview.png"
              alt=""
            />
          </div>
          <div
            class="col-6"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.200)' }}
          >
            <div class="col">
              <h1 class="product-title">{slug}</h1>
            </div>
            <div class="col">
              <hr />
            </div>
            <div class="col my-4">
              <h3 class="product-price">
                19.99$
                <span class="product-logo rounded-pill">
                  <FontAwesomeIcon
                    className="product-logo"
                    icon={faFire}
                  ></FontAwesomeIcon>
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
                <div class="tabs__content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ipsa labore eum ea mollitia repellat est perferendis
                  quo quas magnam nostrum corporis eos magni aperiam dolor, quam
                  quidem eveniet ut.
                </div>
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
