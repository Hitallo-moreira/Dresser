import styled from 'styled-components'
import SimpleSlider from './Slider';
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
    return (
        <FeatureDiv>
            <Title>{props.featuredTitle}</Title>
            <SimpleSlider/ >
        </FeatureDiv>
    )
}

FeaturedProducts.propTypes = {
    featuredTitle: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeaturedProducts