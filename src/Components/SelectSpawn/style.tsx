import styled from "styled-components";

export const MainSelectSpawn = styled.section`
    width: 120rem;
    height: 67.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgba(41, 39, 39, 0.84);
    background-image: url("../src/Images/firebg.png");
`;

export const Section = styled.section`
    width: 120rem;
    height: 52rem;
    display: flex;
    align-items: center;
`;

export const MainBox = styled.div`
    width: 30rem;
    height: 50rem;
    background: rgba(20, 20, 20, 0.84);
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    margin: 0px 10px 0px 10px;
    border-radius: 20px;

    h1 {
        color: #ffffff;
        font-family: "Gilroy-Bold";
        font-style: normal;
        text-transform: uppercase;
        font-weight: 700;
        line-height: normal;
        text-align: center;
        margin-top: 1rem;
    }

    .image {
        width: 90%;
        height: 15rem;
        border-radius: 10px;
        margin-top: 1.5rem;

        img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }

    .text {
        width: 90%;
        height: 15rem;
        border-radius: 10px;
        margin-top: 1.5rem;
        display: flex;
        align-items: center;

        color: #ffffff;
        font-family: "Gilroy-Bold";
        font-size: 1rem;
        font-style: normal;
        text-transform: uppercase;
        line-height: normal;
        text-align: center;
    }

    .button {
        width: 90%;
        height: 4rem;
        background-color: #caf36c;
        border-radius: 10px;
        margin-top: 1.5rem;
        border: none;

        color: #000000;
        font-family: "Gilroy-Bold";
        font-size: 1.5rem;
        font-style: normal;
        text-transform: uppercase;
        font-weight: 400;
        line-height: normal;

    }

    .button:hover {
        background:  rgba(181, 247, 2, 0.9);
        cursor: pointer;
    }
`;

export const H1Title = styled.h1`
    color: white;
    font-size: 4rem;
    font-style: normal;
    text-transform: uppercase;
    font-weight: 800;
    line-height: normal;
    color: #FFF;
    text-shadow: 4px 2px 4px #000000;

    margin: 2rem 0rem 1rem 0rem;
`;

export const ButtonLastLocation = styled.button`
    width: 27rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #FDD330;
    background: linear-gradient(1deg, rgba(253, 211, 48, 0.44) 0%, rgba(253, 211, 48, 0.88) 100%);
    transition: all 2.0 ease;

    color: #FFF;
    font-family: "Gilroy-Bold";
    font-size: 1.5rem;
    font-style: normal;
    text-transform: uppercase;
    font-weight: 400;
    line-height: normal;

    &:hover {
        background:  rgba(253, 211, 48, 0.90);
        cursor: pointer;
    }
`;

export const ButtonSpawnar = styled.button`
    width: 27rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #93fd30;
    background: linear-gradient(1deg, rgba(164, 253, 48, 0.44) 0%, rgba(123, 253, 48, 0.88) 100%);
    transition: all 2.0 ease;

    color: #FFF;
    font-family: "Gilroy-Bold";
    font-size: 1.5rem;
    font-style: normal;
    text-transform: uppercase;
    font-weight: 400;
    line-height: normal;

    &:hover {
        background:  rgba(123, 253, 48, 0.88);
        cursor: pointer;
    }
`;