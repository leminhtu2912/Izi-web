import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
