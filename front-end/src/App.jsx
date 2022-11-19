import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Product from './components/Product/Product.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Emanuel Moda's</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
