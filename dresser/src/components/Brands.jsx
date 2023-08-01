
import styled from 'styled-components'
import nike from '../assets/nike.png'
import adidas from '../assets/adidas.png'

const BrandsDiv = styled.div`
    margin: 37px 0 7rem 0;

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

function Brands() {
    return (
        <BrandsDiv>
            <h1>Marcas</h1>
            <Main>            
                <BrandImage>
                    <img src={nike} alt="" />
                </BrandImage>
                <BrandImage>
                    <img src={adidas} alt="" />
                </BrandImage>
                <BrandImage>
                    <img src={nike} alt="" />
                </BrandImage>
                <BrandImage>
                    <img src={adidas} alt="" />
                </BrandImage>
            </Main>
        </BrandsDiv>
    )
}

export default Brands