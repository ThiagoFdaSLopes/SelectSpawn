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

export const GenderSelect = styled.div`
    width: 100%;
    height: 10rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

type Props = {
    color: string
    active: boolean
}

export const ButtonGenderOption = styled.button<Props>`
    width: 10rem;
    height: 10rem;
    border: none;
    background-color: rgba(${(props) => props.color});
    border-radius: 4px;
    ${(props) => props.active && `border: 2px solid white`};

    &:hover {
        border: 1px solid;
        border-color: #eeeeee;
        cursor: pointer;
    }

    img {
        width: 130px;
        height: 160px;
    }

    &:nth-child(2) > img {
        width: 160px;
    }
`;

export const ButtonCreatePerson = styled.button`
    width: 27rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #93fd30;
    background: linear-gradient(1deg, rgba(164, 253, 48, 0.44) 0%, rgba(123, 253, 48, 0.88) 100%);
    transition: all 2.0 ease;
    margin-top: 2rem;

    color: #FFF;
    font-family: "Gilroy-Bold";
    text-transform: uppercase;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  
  &:hover {
    background:  rgba(123, 253, 48, 0.88);
    cursor: pointer;
  }
`;

export const ButtonReturn = styled.button`
    width: 27rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #fafd30;
    background: linear-gradient(1deg, rgba(253, 250, 48, 0.44) 0%, rgba(253, 250, 48, 0.88) 100%);
    transition: all 2.0 ease;
    margin-top: 2rem;

    color: #FFF;
    font-family: "Gilroy-Bold";
    text-transform: uppercase;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  
  &:hover {
    background:  rgba(253, 239, 48, 0.88);
    cursor: pointer;
  }
`;