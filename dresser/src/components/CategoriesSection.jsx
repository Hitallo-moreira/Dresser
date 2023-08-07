import styled from 'styled-components'
import PropTypes from 'prop-types';

const CategoryDiv = styled.div`
    height: 700px;
    background-color: #E1E1E1;
    margin-bottom: 7rem;
    padding: 3rem;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 2rem;
`;

function Categories(props) {
    return (
        <CategoryDiv>
            <Title>{props.categoriesTitle}</Title>
            <div className='grid-container'>
                <div className='grid-item'>1</div>
                <div className='grid-item'>2</div>
                <div className='grid-item'>3</div>
                <div className='grid-item'>4</div>
            </div>
        </CategoryDiv>
    )
}

Categories.propTypes = {
    categoriesTitle: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Categories