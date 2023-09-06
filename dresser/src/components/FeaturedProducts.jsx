import { useState, useEffect } from 'react';
import styled from 'styled-components'
import Slider from './Slider';
import PropTypes from 'prop-types';

const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 24px;
`;

const FeatureDiv = styled.div`
    margin-bottom: 4rem;
`;

function FeaturedProducts(props) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleWindowResize() {
            setIsMobile(window.innerWidth <= 768);
        }

        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <FeatureDiv>
            <Title>{isMobile ? 'Destaques' : props.featuredTitle}</Title>
            <Slider products={ props.products }/>
        </FeatureDiv>
    )
}

FeaturedProducts.propTypes = {
    featuredTitle: PropTypes.arrayOf(PropTypes.string).isRequired,
    products: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeaturedProducts