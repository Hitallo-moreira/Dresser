import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    height: 500px;
    width: auto;
    padding: 90px;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 20px;
    }
`;

const Info = styled.div`
    font-size: 48px;
    font-weight: 600;
    text-align: center;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 32px;
    }
`;

const CallToAction = styled.div`
    input {
        background-color: #000;
        color: #ffffff;
        width: 240px;
        height: 80px;
        font-size: 24px;
        font-weight: 600;
        border-radius: 12px;
        border: 0;
        margin-top: 30px;
        transition: .3s;

        &:hover {
            background-color: #353535;
        }
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