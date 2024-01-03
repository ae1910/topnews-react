import './css/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header';
import Homepage from './pages/home';
import Category from './pages/category';
import Results from './pages/results';
import Footer from './components/footer';
import GoToTop from './components/gototop';

function App() {
  return (
    <Router basename='/'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/category/:category' element={<Category />}/>
        <Route path='/results' element={<Results />}/>
      </Routes>
      <GoToTop />
      <Footer />
    </Router>
  );
}

export default App;
