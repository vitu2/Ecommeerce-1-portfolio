import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Product from './components/Product/Product.jsx';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import img1 from './assets/Logo-teste.png';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img src={img1} alt="Logo" width="125px" />
                </Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:categoryName" element={<Product />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center"> All Rights Reserved </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
