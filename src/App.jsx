import "./index.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import { Details, PopularProducts } from "./sections";
import {
  vegetable1,
  vegetable2,
  vegetable3,
  vegetable4,
  vegetable5,
} from "./assets/images";

const IMAGES = [vegetable1, vegetable2, vegetable3, vegetable4, vegetable5];
function App() {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="max-w-7xl w-full h-[450px] m-auto">
          <Slider imageUrls={IMAGES} />
        </section>
        <section className="sm:pl-16 pl-8 sm:pr-16 pr-8 sm:pb-24 pb-12">
          <Details />
        </section>
        <section className="sm:px-16 px-8 sm:py-24 py-12">
          <PopularProducts />
        </section>
      </main>
    </>
  );
}

export default App;
