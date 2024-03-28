import Footer from "./Components/footer";
import Header from "./Components/header";
import Main from "./Components/main";

/**
 * membuat component app
 * component utama ysng menampung components lain
 */
function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
