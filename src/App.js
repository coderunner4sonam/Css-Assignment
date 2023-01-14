import "./App.css";
import BodyContent_partfour from "./components/bodycontent/BodyContent_partfour";
import BodyContent_partone from "./components/bodycontent/BodyContent_partone";
import BodyContent_partthree from "./components/bodycontent/BodyContent_partthree";
import BodyContent_parttwo from "./components/bodycontent/BodyContent_parttwo";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const main_content={
    padding:"2%"
  }
  return (
    <>
      <Header />
      <div className="main_content" style={main_content}>
        <BodyContent_partone />
        <BodyContent_parttwo />
        <BodyContent_partthree />
        <BodyContent_partfour />
      </div>
      <Footer />
    </>
  );
}

export default App;
