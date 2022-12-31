import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Store } from './Store';
import { useContext } from 'react';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShipingScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Button from 'react-bootstrap/esm/Button';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="top-center" limit={1} />
        <header>
          <script
            src="https://kit.fontawesome.com/bfe2250ca0.js"
            crossorigin="anonymous"
          ></script>
          <Navbar bg="primary" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <h2>🏪 YG-STORE</h2>
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Nav className="me-auto  w-100  justify-content-end">
                <Link className="pt-2" to="/profile">👤</Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/">
                      <NavDropdown.Item>Home</NavDropdown.Item>
                    </LinkContainer>
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
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
                <label className="px-5"></label>
                <Link to="/cart" className="nav-link ">
                  🛒Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes className="p-3">
              <Route
                path="/product/:slug"
                element={<ProductScreen className="p-3" />}
              />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/:signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="/orderhistory" element={<OrderHistoryScreen />} />
              <Route
                path="/payment"
                element={<PaymentMethodScreen />}
              ></Route>{' '}
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className="border-info bg-info ">
          <div className="container p-2 pb-0">
            <section>
              <div className="d-flex justify-content-between p-3 ">
                <h4 className="px-4 fst-italic pt-2">Register for free!!</h4>
                <button
                  type="button"
                  className="btn btn-outline-info border border-light btn-light p-1 btn-rounded"
                >
                  <Link className="nav-link px-1 mb-1" to="/signup">
                    Sign up
                  </Link>
                </button>
                <div className="px-4  gap-2 pt-2">
                  <button className="d-flex justify-content-center border border-light btn-light  pt-1 mb-1 bg-body rounded gap-3 ">
                    <a href="https://www.linkedin.com/in/yossef-g/">
                      <i className="fab fa-instagram-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yossef-g/">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yossef-g/">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yossef-g/">
                      <i className="fab fa-linkedin-in "></i>
                    </a>
                  </button>
                </div>
                <strong className="ms-auto p-2 bd-highlight">
                  &copy;YG-STORE-INC.All Right Reserved.
                </strong>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
