import styled from 'styled-components';

const Footer = styled.div`
    height: auto;
    width: 100%;
    background-color: #000;
    color: #ffffff;
    padding-bottom: 40px;
`;

const FooterInfo = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 80px 0 65px 0;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        padding: 40px 20px 0px 20px;
        justify-content: center;
        align-items: center;
    }
`;

const RightContent = styled.div`
    display: flex;
    gap: 50px;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

const BuySection = styled.div`
    ul {
        list-style: none;
        padding: 0;

        li {
            a {
                color: #ffffff;
                font-size: 20px;
                font-weight: 400;
                text-decoration: none;
                
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

const CompanySection = styled.div`
    margin-right: 100px;

    ul {
        list-style: none;
        padding: 0;

        li {
            a {
                color: #ffffff;
                font-size: 20px;
                font-weight: 400;
                text-decoration: none;
                
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-right: 0;  
    }
`;

const Copyright = styled.div`
    p {
        text-align: center;
        margin-bottom: 0;
    }

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-top: 20px;  
    }
`;

function footer({ menuItems, companyItems, buySectionTitle, companySectionTitle }) {
    return (
        <Footer>
            <FooterInfo className='container'>
                <div>
                    <h1>Dresser.</h1>
                </div>
                <RightContent>
                    <BuySection>
                        <h4>{buySectionTitle}</h4>
                        <ul>
                            {menuItems.map((item) => (
                                <li key={item}>
                                    <a href={`/${item.toLowerCase()}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </BuySection>
                    <CompanySection>
                        <h4>{companySectionTitle}</h4>
                        <ul>
                            {companyItems.map((item) => (
                                <li key={item}>
                                    <a href={`/${item.toLowerCase()}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </CompanySection>
                </RightContent>
            </FooterInfo>
            <Copyright>
                <p>Copyright @ 2023 Dresser All right reserved</p>
            </Copyright>
        </Footer>
    )
}

export default footer