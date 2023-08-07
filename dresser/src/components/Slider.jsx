import { Component } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

const ProductCard = styled.div`
    height: 300px;
    width: 300px;
    background-color: #ccc;
`;


export default class SimpleSlider extends Component {
    render() {
      const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
                <ProductCard>
                    <p>teste</p>
                </ProductCard>
            </div>
            <div>
                <ProductCard>
                    <p>teste</p>
                </ProductCard>
            </div>
            <div>
                <ProductCard>
                    <p>teste</p>
                </ProductCard>
            </div>
            <div>
                <ProductCard>
                    <p>teste</p>
                </ProductCard>
            </div>
          </Slider>
        </div>
      );
    }
  }