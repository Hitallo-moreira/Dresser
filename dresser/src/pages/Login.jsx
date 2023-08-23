import Form from "../components/LoginForm"
import styled from "styled-components"

const LoginPage = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
    height: 100vh;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        height: inherit;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: #000;

    
    h1 {
        font-size: 48px;
        color: #ffffff;
        margin: 0;
        
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            color: #000;
            font-size: 32px;
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 100%;
        background-color: #ffffff;
        margin: 23px 0 23px 0;
    }
`;



function Login() {
    return (
        <LoginPage>
            <Logo>
                <h1>Dresser.</h1>
            </Logo>
            <Form formTitle="Login"
             mobileDescription="Insira seus dados para fazer o login"
             desktopDescription="Insira seu E-mail e senha para fazer o login"
             emailLabel="E-mail" 
             passwordLabel="Senha"
             submitButtonText="Entrar"
             notRegistered="Ainda não tem conta?"
             createAccount="Criar conta"
             forgotPassword="Esqueci minha senha"
             />
        </LoginPage>
    )
}

export default Login