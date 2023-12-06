import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FinRep</div>
      <div className="nav-items">
        {/* <a href="#testimonials">Testimonials</a> */}
        <button className="button button-secondary" href='https://www.mongodb.com/products/charts'>Documentation</button>
        {/* <button className="button button-primary">Get started today</button> */}
      </div>
    </nav>
  );
}

export default Navbar;
