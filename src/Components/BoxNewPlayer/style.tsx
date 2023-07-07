import styled from "styled-components";

export const MainBox = styled.div`
    display: flex;
    width: 40rem;
    height: 67.5rem;

    background: rgba(28, 28, 28, 0.84);
    overflow: hidden;
`;

export const MainCardName = styled.section`
    width: 6.5rem;
    height: 100vh;
    background: linear-gradient(180deg, rgba(226, 226, 226, 0.06) 0%, rgba(0, 0, 0, 0.06) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    p {
        width: 25rem;
        transform: rotate(-90deg);
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: #FFF;
    }
`;

export const ButtonPlay = styled.button`
    width: 27rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #93fd30;
    background: linear-gradient(1deg, rgba(164, 253, 48, 0.44) 0%, rgba(123, 253, 48, 0.88) 100%);

    position: relative;
    left: 2rem;
    top: 55rem;
    color: #FFF;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;