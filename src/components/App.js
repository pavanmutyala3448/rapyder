import "../styles.css";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "./carousel";
import Section3 from "./section3";
import Section4 from "./section4";

export default function App() {
  return (
    <div className="App">
      <Carousel />
      <Section3 />
      <Section4 />
    </div>
  );
}
