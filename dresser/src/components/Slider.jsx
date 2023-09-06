import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PropTypes from 'prop-types';

const ImgDiv = styled.div`
  height: 250px;

  img {
    object-fit: contain;
    width: 100%;
    height: 250px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 20px 20px;

  h3 {
    font-size: 1.5rem;
  }

  p,
  span {
    font-weight: 500;
  }

  span {
    font-size: 1.3rem;
  }
`;

const ProductSpecs = styled.div`
  display: flex;
  gap: 20px;
`;

const CallToAction = styled.div`
    display: flex;
    justify-content: center;

    input {
        background-color: #000;
        color: #ffffff;
        width: 100%;
        height: 60px;
        font-size: 20px;
        font-weight: 600;
        border-radius: 12px;
        border: 0;
        margin-top: 20px;
        transition: .3s;

        &:hover {
            background-color: #353535;
        }
    }
`;

function Slider({ products }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      autoplay={{ delay: 3000 }}
      breakpoints={{
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div>
            <ImgDiv>
              <img src={`${product.image_path}`} alt={product.product_name} />
            </ImgDiv>
            <ProductInfo>
              <h3>{product.product_name}</h3>
              <ProductSpecs>
                <p>Cor: {product.product_color}</p>
                <p>Tamanho: {product.product_size}</p>
              </ProductSpecs>
              <span>R$ {product.product_price}</span>
              <CallToAction>
                  <input type="submit" value={"Comprar agora"} />
              </CallToAction>
            </ProductInfo>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

Slider.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Slider;