import './App.css'
import App from "./Components/App"
import Hello from "./Components/Hello"
import footer from "./Components/footer"
import header from "./Components/header"
import main from "./Components/main"

/**
 * membuat component app
 * component utama ysng menampung components lain
 */
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;