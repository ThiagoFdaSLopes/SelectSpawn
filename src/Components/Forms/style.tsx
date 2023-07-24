import styled from "styled-components";

export const MaiNForms = styled.form`
    width: 100%;
    height: 10rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const InputMain = styled.input`
    width: 20rem;
    border: solid 1.5px #9e9e9e;
    background: none;
    padding: 1rem;
    font-size: 1rem;    
    color: #f5f5f5;
    transition: border 150ms cubic-bezier(0.4,0,0.2,1);
    margin-bottom: 10px;
`;