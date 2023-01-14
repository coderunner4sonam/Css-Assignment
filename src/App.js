import "./App.css";
import BodyContent_partfour from "./components/bodycontent/BodyContent_partfour";
import BodyContent_partone from "./components/bodycontent/BodyContent_partone";
import BodyContent_partthree from "./components/bodycontent/BodyContent_partthree";
import BodyContent_parttwo from "./components/bodycontent/BodyContent_parttwo";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <BodyContent_partone />
      <BodyContent_parttwo />
      <BodyContent_partthree/>
      <BodyContent_partfour/>
      <Footer/>
    </>
  );
}

export default App;
