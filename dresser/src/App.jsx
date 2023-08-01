import Header from "./components/Header"
import HeroSection from "./components/HeroSection";
import Brands from "./components/Brands";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/CategoriesSection";

function App() {
  const menuItems = ['Feminino', 'Masculino', 'Marcas'];

  return (
    <div className="container">
      <Header menuItems={menuItems} />
      <HeroSection />
      <Brands />
      <FeaturedProducts />
      <Categories />
    </div>
  )
}

export default App
