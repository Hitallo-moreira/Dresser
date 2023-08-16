import Header from "./components/Header"
import HeroSection from "./components/HeroSection";
import Brands from "./components/Brands";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/CategoriesSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer"

function App() {
  const menuItems = ['Feminino', 'Masculino', 'Marcas'];
  const companyItems = ['Sobre', 'Contato'];

  return (
    <div>
      <div className="container">
        <Header menuItems={menuItems} />
        <HeroSection info="Descubra a moda que faz você brilhar! Seu estilo único começa aqui" />
        <Brands brandsTitle="Marcas" />
        <FeaturedProducts featuredTitle="Produtos em destaque" />
        <Categories categoriesTitle="Categorias" />
        <Newsletter newsletterTitle="Se inscreva na nossa newsletter e fique por dentro das novidades" />
      </div>
      <Footer menuItems={menuItems} companyItems={companyItems} buySectionTitle="Comprar" companySectionTitle="Empresa"/>
    </div>
  )
}

export default App
