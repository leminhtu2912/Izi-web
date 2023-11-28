import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.css';
import Connect from './components/Connect/Connect';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Connect />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
