import styled from "styled-components"
import SignupForm from "../components/SignupForm";

const SignupPage = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;

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

function CreateAccount() {
    return (
        <SignupPage>
            <Logo>
                <h1>Dresser.</h1>
            </Logo>
            <SignupForm formTitle="Criar conta"
             mobileDescription="Insira seus dados para criar uma conta"
             desktopDescription="Insira seus dados para criar uma conta"
             nameLabel="Nome completo"
             emailLabel="E-mail"
             confirmEmailLabel="Confirme o E-mail"
             passwordLabel="Senha"
             submitButtonText="Criar conta"
             registered="Já possui uma conta?"
             loginPage="Fazer Login"
             />
        </SignupPage>
    )
}

export default CreateAccount