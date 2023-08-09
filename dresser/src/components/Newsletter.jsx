import { useState, useEffect } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const NewsletterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 7rem;
`;

const TitleDiv = styled.div`
    width: 70%;
    margin-bottom: 36px;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 100%;
        margin-bottom: 10px;
    }
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: 600;
    margin: 0;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 32px;
    }
`;

const Form = styled.div`
    display: flex;
`;

const NewsletterInputText = styled.input`
    height: 60px;
    width: 300px;
    outline: none;
    font-size: 24px;
    color: #353535;
    padding-left: 15px;
    background-color: #E1E1E1;
    border: none;
    border-radius: 10px 0px 0px 10px;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 70%;
    }
`;

const NewsletterInputSubmit = styled.input`
    height: 60px;
    width: 100px;
    border: none;
    border-radius: 0px 10px 10px 0px;
    font-size: 18px;
    font-weight: 600;
    background-color: #000;
    transition: .3s;

    &:hover {
        background-color: #353535;
    }
`;

function Newsletter(props) {
    const [isMobile, setIsMobile] = useState(false);
    const [inputPlaceholder, setInputPlaceholder] = useState('Digite aqui seu E-mail');

    useEffect(() => {
        function handleWindowResize() {
            setIsMobile(window.innerWidth <= 768);

            if (window.innerWidth <= 768) {
                setInputPlaceholder('Digite seu E-mail');
            } else {
                setInputPlaceholder('Digite aqui seu E-mail');
            }
        }

        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <NewsletterDiv>
            <TitleDiv>
                <Title>{isMobile ? 'Se inscreva na nossa newsletter' : props.newsletterTitle}</Title>
            </TitleDiv>
            <Form>
                <NewsletterInputText type="text" placeholder={inputPlaceholder} />
                <NewsletterInputSubmit type="submit" />
            </Form>
        </NewsletterDiv>
    )
}

Newsletter.propTypes = {
    newsletterTitle: PropTypes.string.isRequired,
};

export default Newsletter

