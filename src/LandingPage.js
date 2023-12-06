import DimensionUpload from './DimensionUpload';
import FactUpload from './FactUpload';
import MainContent from './MainContent';
import Navbar from './NavBar';
import './MainContent.css';
import Footer from './Footer';


function LandingPage() {
  const handleClickScroll = () => {
    const element = document.getElementById('transaction-upload');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
      <div>
        <Navbar/>
        <div className="main-content-container">
          <p className="main-heading">Retail Finances, Demystified.</p>
          <p className="sub-heading">You should be planning your next big sale, not wrestling with spreadsheets.</p>
          <button className="button-primary" onClick={handleClickScroll}>Get Started today</button>
          {/* <button className="button button-secondary">Watch video</button> */}
        </div>
        <div id='transaction-upload'>
        <FactUpload/>
        </div>
        <DimensionUpload/>
        <Footer/>
        
      </div>
    );
  }
  
  export default LandingPage;