import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import banner from '../assets/banner.jpg'

const MainContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
    height: 500px;
    width: auto;
    padding: 0;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        opacity: 0.8;
    }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        height: 400px;
    }
`;

const Info = styled.div`
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    position: absolute;
    color: #ffffff;
    margin: 0 60px 0 60px;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 32px;
        margin: 0 2px 0 2px;
    }
`;

const CallToAction = styled.div`
    position: absolute;
    top: 60%;

    input {
        background-color: #000;
        color: #ffffff;
        width: 240px;
        height: 80px;
        font-size: 24px;
        font-weight: 600;
        border-radius: 12px;
        border: 1px solid #1d1d1d;
        margin-top: 30px;
        transition: .3s;

        &:hover {
            background-color: #353535;
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        top: 64%;
    }

    @media only screen and (min-width: 769px) and (max-width: 1024px) {
        top: 68%;
    }
`;

function HeroSection(props) {
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
        <div>
            <MainContent className='container'>
                <img src={banner} alt="Banner principal" />
                <Info>
                    {isMobile ? 'Descubra a moda que faz você brilhar!' : props.info}
                </Info>
                <CallToAction>
                    <input type="submit" value={"Comprar agora"} />
                </CallToAction>
            </MainContent>
        </div>
    )
}

HeroSection.propTypes = {
    info: PropTypes.string.isRequired,
};

export default HeroSection