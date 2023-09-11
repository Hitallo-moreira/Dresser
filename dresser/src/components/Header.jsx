import { useState } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import userProfile from '../assets/user-profile.png'
import bag from '../assets/bag.png'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const fontSize = 20;
const Logo = styled.div`
    h1 {
        a {
            color: #000;
            font-size: 32px;
            cursor: pointer;
            text-decoration: none;
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        h1 {
            text-align: center;
            margin: 23px 0 1.25rem 0;
        }
    }
`;

const Menu = styled.header`
    width: 100%;
    height: 100px;
    
    ul {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 0;
        padding: 0;
        list-style: none;
        
        li {
            a {
                font-size: ${fontSize}px;
                color: #000;
                font-weight: 600;
                text-decoration: none;
                transition: .3s;
                
                &:hover {
                    color: #b1b1b1;
                }
            }
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        height: auto;

        ul {
            flex-direction: column;
        }
    }
`;

const MenuOptions = styled.div`
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BurgerMenuItems = styled.div`
    display: flex;
    flex-direction: column;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        align-items: center;
        margin-bottom: 20px;
        gap: 10px;

        p {
            margin: 0;
            color: #000;
        }
    }
`;

const BagDiv = styled.div`
    img {
        width: 36px;
        cursor: pointer;
    }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 20px;

        a {
            text-decoration: none;
            color: #000;
            font-size: 20px;
        }
    }
`;

const UserProfile = styled.div`
    img {
        width: 36px;
        cursor: pointer;
    }
`;

function Header({ menuItems }) {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClose = () => {
        setIsOpen(false);
    };

    return (
        <Menu>
            {isMobile ? (
                <div>
                    <Logo>
                        <h1 onClick={handleMenuClose}><a href="#">Dresser.</a></h1>
                    </Logo>
                    <BurgerMenu left isOpen={isOpen} onStateChange={state => setIsOpen(state.isOpen)}>
                        <MenuOptions>
                            <BurgerMenuItems>
                                <Info>
                                    <UserProfile>
                                        <Link to="/login">
                                            <img src={userProfile} alt="User profile" />
                                        </Link>
                                    </UserProfile>
                                </Info>
                                    <BagDiv>
                                        <a href="">Meus pedidos</a>
                                    </BagDiv>
                                <ul>
                                    {menuItems.map((item) => (
                                        <li key={item}>
                                            <a href={`/${item.toLowerCase()}`}>{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </BurgerMenuItems>
                        </MenuOptions>
                    </BurgerMenu>
                </div>
            ) : (
                <MenuOptions>
                    <Logo>
                        <h1><a href="#">Dresser.</a></h1>
                    </Logo>
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item}>
                                <a href={`/${item.toLowerCase()}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <Info>
                        <BagDiv>
                            <img src={bag} alt="shopping bag" />
                        </BagDiv>
                        <UserProfile>
                            <Link to="/login">
                                <img src={userProfile} alt="User profile" />
                            </Link>
                        </UserProfile>
                    </Info>
                </MenuOptions>
            )}
        </Menu>
    )
}

Header.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header