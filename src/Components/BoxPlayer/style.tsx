import styled from "styled-components";

type PropsImgs = {
    img: string,
}

export const MainBox = styled.div<PropsImgs>`
    width: 40rem;
    height: 67.5rem;
    background: rgba(41, 39, 39, 0.84);
    background-image: url(${({ img }) => img});
    background-repeat: no-repeat;
    background-position: right 14rem;
    overflow: hidden;
    display: flex;
    border-right: 2px solid;
	border-image: linear-gradient(to bottom, #181818, #eee, #181818) 1 100%;
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
        text-transform: uppercase;
        font-weight: 700;
        line-height: normal;
        color: #FFF;
    }

    div {
        width: 5.875rem;
        height: 5.875rem; 
        fill: rgba(255, 255, 255, 0.20);
        position: absolute;
        top: 50px;
    }

    span {
        position: absolute;
        top: 20px;
        left: 25px;
        color: #FFF;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

export const ButtonPlay = styled.button`
    width: 27rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #FDD330;
    background: linear-gradient(1deg, rgba(253, 211, 48, 0.44) 0%, rgba(253, 211, 48, 0.88) 100%);
    transition: all 2.0 ease;
    
    position: relative;
    left: 1rem;
    top: 55rem;
    z-index: 3;
    color: #FFF;
    font-family: "Gilroy-Bold";
    font-size: 1.5rem;
    font-style: normal;
    text-transform: uppercase;
    font-weight: 400;
    line-height: normal;

    &:hover {
        background:  rgba(253, 211, 48, 0.88);
        cursor: pointer;
    }
`;

// export const MainImage = styled.img<PropsImgs>`
//     width: 30rem;
//     height: 32rem;
//     border: none;
//     background-image: url(${({ img }) => img});
//     background-repeat: no-repeat;
// `;