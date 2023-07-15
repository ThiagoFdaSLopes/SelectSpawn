import styled from "styled-components";

export const MainBox = styled.div`
    display: flex;
    width: 40rem;
    height: 67.5rem;
    background: rgba(28, 28, 28, 0.84);
    overflow: hidden;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const SpaceFree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22.5625rem;
  height: 3.375rem;

  p {
    font-family: "Gilroy-Medium";
    font-size: 2.5rem;
    color: white;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const SpaceFreeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22.5625rem;
  height: 3.375rem;
  margin-top: 1rem;

  p {
    font-family: "Gilroy-Medium";
    font-size: 1rem;
    color: white;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }
`;

export const MainCardInfoNewPlayer = styled.section`
    width: 30rem;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`;

export const ButtonPlay = styled.button`
    width: 27rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #93fd30;
    background: linear-gradient(1deg, rgba(164, 253, 48, 0.44) 0%, rgba(123, 253, 48, 0.88) 100%);
    transition: all 2.0 ease;

    color: #FFF;
    position: relative;
    top: 13.4rem;
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