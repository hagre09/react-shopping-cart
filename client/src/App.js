import { useState } from "react";
import Filter from "./components/Filter/Filter.js";
import Footer from "./components/Footer/footer.js";
import Header from "./components/Header/header.js";
import Products from "./components/Products/Products.js";
import data from './data.json';
function App() {

  const [products, setProducts] = useState(data);

  const productsFilter = (products) => {
    setProducts(products);
  }
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter productsFilter = {productsFilter}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
