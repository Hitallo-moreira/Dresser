import { useState, useEffect } from 'react';
import axios from 'axios';
import HeroSection from "../components/HeroSection";
import Brands from "../components/Brands";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/CategoriesSection";
import Newsletter from "../components/Newsletter";
import PropTypes from 'prop-types';

function HomePage() {
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
        <div className="container">
            <HeroSection info="Descubra a moda que faz você brilhar! Seu estilo único começa aqui" />
            <Brands brandsTitle="Marcas" />
            <FeaturedProducts featuredTitle="Produtos em destaque" products={products} />
            <Categories categoriesTitle="Categorias" />
            <Newsletter newsletterTitle="Se inscreva na nossa newsletter e fique por dentro das novidades" />
        </div>
    )
}

HomePage.propTypes = {
    products: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HomePage