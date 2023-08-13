import './App.css';
import AboutUs from './Components/AboutUs';
import Banner from './Components/banner';
import CustomerReviews from './Components/CustomerReviews';
import Footer from './Components/Footer';
import Navbar from './Components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutUs />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default App;
