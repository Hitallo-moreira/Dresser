import styled from "styled-components"
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import showPasswordImg from '../assets/show-password.png'
import hidePasswordImg from '../assets/hide.png'

const FormDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            width: 90%;
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 100%;
    }
`;

const Info = styled.div`
    margin: 10px 0 20px 0;

    h1 {
        color: #000;
        font-size: 48px;
        font-weight: 600;

        @media only screen and (min-width: 320px) and (max-width: 768px) {
            font-size: 28px;
        }
    }

    p {
        color: #888888;
        font-weight: 600;
        font-size: 20px;
        margin: 0;

        @media only screen and (min-width: 320px) and (max-width: 768px) {
            font-size: 18px;
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 35px;
    }
`;

const InputDiv = styled.div`
   display: flex;
   flex-direction: column;

    input {
        height: 60px;
        border-radius: 10px;
        border: none;
        outline: none;
        background: #D9D9D9;
    }
`;

const NameDiv = styled(InputDiv)`
   margin-bottom: 20px;

   label {
    font-weight: 600;
   }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

const EmailDiv = styled(InputDiv)`
   margin-bottom: 20px;

   label {
    font-weight: 600;
   }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

const PasswordDiv = styled(InputDiv)`
   label {
    font-weight: 600;
   }

   img {
    position: relative;
    bottom: 45px;
    left: 85%;
    height: auto;
    width: 30px;
    cursor: pointer;
   }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 15px;
    }
`;

const Field = styled.input`
   padding-left: 15px;
   font-size: 20px;
   color: #000;
`;

const Button = styled.input`
    width: 100%;
    border-radius: 10px;
    background: #000;
    border: none;
    height: 60px;
    margin-bottom: 35px;
    font-weight: 600;
    font-size: 20px;
    transition: .3s;

    &:hover {
        background-color: #353535;
    }
`;

const Login = styled.div`
    display: flex;
    gap: 8px;

    p {
        color: #888;
    }
`;

const Link = styled.b`
    color: #0057FF;
`;

function SignupForm(props) {
    const [isMobile, setIsMobile] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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
        <FormDiv>
            <form>
                <Info>
                    <h1>{props.formTitle}</h1>
                    <p>{isMobile ? props.mobileDescription : props.desktopDescription}</p>
                </Info>
                <div>
                    <NameDiv>
                        <label>{props.nameLabel}</label>
                        <Field type="email" autoComplete="username" />
                    </NameDiv>
                    <EmailDiv>
                        <label>{props.emailLabel}</label>
                        <Field type="email" autoComplete="username" />
                    </EmailDiv>
                    <EmailDiv>
                        <label>{props.confirmEmailLabel}</label>
                        <Field type="email" autoComplete="username" />
                    </EmailDiv>
                    <PasswordDiv>
                        <label>{props.passwordLabel}</label>
                        <Field type={showPassword ? "text" : "password"} autoComplete="current-password" />
                        <img
                            src={showPassword ? hidePasswordImg : showPasswordImg}
                            alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </PasswordDiv>
                    <div>
                        <Button type="submit" value={props.submitButtonText} />
                    </div>
                    <Login>
                        <p>{props.registered}</p> <Link>{props.loginPage}</Link>
                    </Login>
                </div>
            </form>
        </FormDiv>
    )
}

SignupForm.propTypes = {
    formTitle: PropTypes.string.isRequired,
    mobileDescription: PropTypes.string.isRequired,
    desktopDescription: PropTypes.string.isRequired,
    nameLabel: PropTypes.string.isRequired,
    emailLabel: PropTypes.string.isRequired,
    confirmEmailLabel: PropTypes.string.isRequired,
    passwordLabel: PropTypes.string.isRequired,
    submitButtonText: PropTypes.string.isRequired,
    registered: PropTypes.string.isRequired,
    loginPage: PropTypes.string.isRequired,
};

export default SignupForm