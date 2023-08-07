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
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: 600;
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
    return (
        <NewsletterDiv>
            <TitleDiv>
                <Title>{props.newsletterTitle}</Title>
            </TitleDiv>
            <Form>            
                <NewsletterInputText type="text" placeholder="Digite aqui seu E-mail" />
                <NewsletterInputSubmit type="submit" />
            </Form>            
        </NewsletterDiv>
    )
}

Newsletter.propTypes = {
    newsletterTitle: PropTypes.string.isRequired,
};

export default Newsletter

