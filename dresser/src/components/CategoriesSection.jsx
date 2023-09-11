import styled from 'styled-components';
import PropTypes from 'prop-types';
import verao from '../assets/verao.jpeg';
import inverno from '../assets/inverno.jpeg';
import outono from '../assets/outono.jpeg';
import primavera from '../assets/primavera.jpeg';

const CategoryDiv = styled.div`
    height: auto;
    margin-bottom: 7rem;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-bottom: 37px;
        padding: 1.25rem;
        height: 500px;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 2rem;

    @media only screen and (min-width: 320px) and (max-width: 768px) {
        font-size: 32px;
        margin-bottom: 1rem;
    }
`;

function Categories(props) {
    return (
        <CategoryDiv>
            <Title>{props.categoriesTitle}</Title>
            <div className='grid-container'>
                <div className='grid-item'>
                    <img src={verao} alt="Categoria verão" />
                    <div className="info">
                        <h1>Verão</h1>
                    </div>
                </div>
                <div className='grid-item'>
                    <img src={inverno} alt="Categoria verão" />
                    <div className="info">
                        <h1>Inverno</h1>
                    </div>
                </div>
                <div className='grid-item'>
                    <img src={outono} alt="Categoria verão" />
                    <div className="info">
                        <h1>Outono</h1>
                    </div>
                </div>
                <div className='grid-item'>
                    <img src={primavera} alt="Categoria verão" />
                    <div className="info">
                        <h1>Primavera</h1>
                    </div>
                </div>
            </div>
        </CategoryDiv>
    )
}

Categories.propTypes = {
    categoriesTitle: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Categories