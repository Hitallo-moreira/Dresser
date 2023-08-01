import styled from 'styled-components'
import SimpleSlider from './Slider';

const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 24px;
`;

const FeatureDiv = styled.div`
    margin-bottom: 4rem;
`;

function FeaturedProducts() {
    return (
        <FeatureDiv>
            <Title>Produtos em destaque</Title>
            <SimpleSlider/ >
        </FeatureDiv>
    )
}

export default FeaturedProducts