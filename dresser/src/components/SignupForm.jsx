import styled from "styled-components"
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
        height: 30px;
        border-radius: 5px;
        border: none;
        outline: none;
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
   margin-bottom: 22px;
   
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
        margin-bottom: 20px;
    }
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

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                        <TextField autoComplete="username" />

                    </NameDiv>
                    <EmailDiv>
                        <label>{props.emailLabel}</label>
                        <TextField type="email" autoComplete="username" />
                    </EmailDiv>
                    <EmailDiv>
                        <label>{props.confirmEmailLabel}</label>
                        <TextField type="email" autoComplete="username" />
                    </EmailDiv>
                    <PasswordDiv>
                        <label>{props.passwordLabel}</label>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
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