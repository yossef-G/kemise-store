import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="primary" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <h2>Kemis</h2>
                </Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main className="">
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className="p-2 mb-2 bg-secondary text-blue">
          <div className="container p-4 pb-0">
            <section>
              <p className="d-flex justify-content-center align-items-center ms-auto p-2 bd-highlight">
                <span className="me-1 h4">Register for free</span>
                <button
                  type="button"
                  className="btn btn-outline-info btn-light btn-rounded"
                >
                  Sign up!
                </button>
                <div className="ms-auto h4 p-2 bd-highlight">
                  all-right-reserved@
                </div>
              </p>
            </section>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
