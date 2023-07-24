import styled from 'styled-components';

export const MainCreator = styled.section`
    width: 120rem;
    height: 67.5rem;
    overflow: hidden;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MenuRigth = styled.div`
    width: 30rem;
    height: 67.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #3a3838;

    h1 {
        color: white;
        font-size: 2rem;
        font-style: normal;
        text-transform: uppercase;
        font-weight: 700;
        line-height: normal;
        color: #FFF;
        text-align: center;
        margin: 20px 0px 20px 0px;
        border-bottom: 2px solid white;
    }
`;

export const MenuLeft = styled.div`
    width: 10rem;
    height: 50rem;
    border-radius: 0.5rem;
    background-color: #3a3838; 
`;