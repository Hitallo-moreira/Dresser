
import styled from 'styled-components'
import nike from '../assets/nike.png'
import adidas from '../assets/adidas.png'
import PropTypes from 'prop-types';

const BrandsDiv = styled.div`
    margin: 37px 0 4rem 0;

    h1 {
        color: #000;
        font-size: 32px;
        font-weight: 600;
    }
`;

const Main = styled.div`
    display: flex;
    gap: 20px;
`;

const BrandImage = styled.div`
    img {
        height: auto;
        width: 40px;
    }
`;

function Brands(props) {
    return (
        <BrandsDiv>
            <h1>{props.brandsTitle}</h1>
            <Main>            
                <BrandImage>
                    <img src={nike} alt="Nike logo" />
                </BrandImage>
                <BrandImage>
                    <img src={adidas} alt="Adidas logo" />
                </BrandImage>
                <BrandImage>
                    <img src={nike} alt="Nike logo" />
                </BrandImage>
                <BrandImage>
                    <img src={adidas} alt="Adidas logo" />
                </BrandImage>
            </Main>
        </BrandsDiv>
    )
}

Brands.propTypes = {
    brandsTitle: PropTypes.string.isRequired,
};

export default Brands