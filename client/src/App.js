import Footer from "./components/Footer/footer.js";
import Header from "./components/Header/header.js";

import { words } from "./words.js";
function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        {words.content}
      </main>
      <Footer />
    </div>
  );
}

export default App;
