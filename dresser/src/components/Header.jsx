import styled from 'styled-components';
import userProfile from '../assets/user-profile.png'
import bag from '../assets/bag.png'
import PropTypes from 'prop-types';

const fontSize = 20;
const Logo = styled.div`
    h1 {
        color: #000;
        font-size: 32px;
        cursor: pointer;
    }
`;

const Menu = styled.header`
    top: 0;
    left: 0;
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
`;

const MenuOptions = styled.div `
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Info =  styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const BagDiv = styled.div`
    img {
        width: 36px;
        cursor: pointer;
    }
`;

const UserProfile = styled.div`
    img {
        width: 36px;
        cursor: pointer;
    }
`;

function Header({ menuItems }) {
    return (
        <Menu>
            <MenuOptions>
                <Logo>
                    <h1>Dresser.</h1>
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
                        <img src={userProfile} alt="User profile" />
                    </UserProfile>
                </Info>
            </MenuOptions>
        </Menu>
    )
}

Header.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header