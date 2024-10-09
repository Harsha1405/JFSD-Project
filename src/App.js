import logo from './logo.svg';
import './App.css';

import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Navigation/Footer/Footer';
import Navigation from './customer/components/Navigation/navigationData';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';



function App() {
  return (
    
      <div className=" ">
<Navigation />
<div>
    { /*<HomePage/> */}
    {/* <Product/> */}
    <ProductDetails/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
