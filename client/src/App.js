import Footer from "./components/Footer/footer.js";
import Header from "./components/Header/header.js";
import Products from "./components/Products/Products.js";

import { words } from "./words.js";
function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products/>
          <div className="filter-wrapper">Filter</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
