import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import Badge from 'react-bootstrap/esm/Badge';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShippingAddressScreen from './screens/ShipingScreen';
import ShippingScreen from './screens/ShipingScreen';
import SignupScreen from './screens/SignupScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="primary" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <h2>🏪 YG-STORE</h2>
                </Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link ">
                  🛒Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
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
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes className="p-3">
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route
                path="/shipping"
                element={<ShippingScreen />}
              ></Route>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className="border-info bg-info ">
          <div className="container">
            <section>
              <div className="d-flex justify-content-between p-2 ">
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
