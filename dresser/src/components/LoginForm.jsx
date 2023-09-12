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
        margin-top: 20px;
    }
`;

const Info = styled.div`
    margin-bottom: 45px;

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
        height: 25px;
        border-radius: 5px;
        border: none;
        outline: none;
    }
`;

const EmailDiv = styled(InputDiv)`
   margin-bottom: 26px;

   label {
    font-weight: 600;
   }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

const PasswordDiv = styled(InputDiv)`
   margin-bottom: 44px;

   label {
    font-weight: 600;
   }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 40px;
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

const CreateAccount = styled.div`
    display: flex;
    gap: 8px;

    p {
        color: #888;
    }
`;

const Link = styled.b`
    color: #0057FF;
`;

function Form(props) {
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
                    <EmailDiv>
                        <label>{props.emailLabel}</label>
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
                        <Button type="button" value={props.submitButtonText} />
                    </div>
                    <CreateAccount>
                        <p>{props.notRegistered}</p> <Link>{props.createAccount}</Link>
                    </CreateAccount>
                    <Link>{props.forgotPassword}</Link>
                </div>
            </form>
        </FormDiv>
    )
}

Form.propTypes = {
    formTitle: PropTypes.string.isRequired,
    mobileDescription: PropTypes.string.isRequired,
    desktopDescription: PropTypes.string.isRequired,
    emailLabel: PropTypes.string.isRequired,
    passwordLabel: PropTypes.string.isRequired,
    submitButtonText: PropTypes.string.isRequired,
    notRegistered: PropTypes.string.isRequired,
    createAccount: PropTypes.string.isRequired,
    forgotPassword: PropTypes.string.isRequired,
};

export default Form