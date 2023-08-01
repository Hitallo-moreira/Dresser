import styled from 'styled-components'

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

function Categories() {
    return (
        <CategoryDiv>
            <Title>Categorias</Title>
            <div className='grid-container'>
                <div className='grid-item'>1</div>
                <div className='grid-item'>2</div>
                <div className='grid-item'>3</div>
                <div className='grid-item'>4</div>
            </div>
        </CategoryDiv>
    )
}

export default Categories