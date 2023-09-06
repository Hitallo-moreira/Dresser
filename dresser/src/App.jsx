import { useState, useEffect } from 'react';
import Header from "./components/Header"
import HeroSection from "./components/HeroSection";
import Brands from "./components/Brands";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/CategoriesSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer"
import axios from 'axios';

function App() {
  const menuItems = ['Feminino', 'Masculino', 'Marcas'];
  const companyItems = ['Sobre', 'Contato'];
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost/dresser-back/');
      const data = response.data;

      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        <Header menuItems={menuItems} />
        <HeroSection info="Descubra a moda que faz você brilhar! Seu estilo único começa aqui" />
        <Brands brandsTitle="Marcas" />
        <FeaturedProducts featuredTitle="Produtos em destaque" products={products} />
        <Categories categoriesTitle="Categorias" />
        <Newsletter newsletterTitle="Se inscreva na nossa newsletter e fique por dentro das novidades" />
      </div>
      <Footer menuItems={menuItems} companyItems={companyItems} buySectionTitle="Comprar" companySectionTitle="Empresa"/>
    </div>
  )
}

export default App
