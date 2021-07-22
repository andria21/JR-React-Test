import styled from 'styled-components';


export const ButtonContainer = styled.button`
    text-transform: uppercase;
    font-size: 1.4rem;
    background: #5ECE7B;
    border: 0.05rem solid #5ECE7B;
    border-color: #5ECE7B;
    color: white;
    border-radius: 0rem;
    padding: 0.6rem 6rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: #5ECE7B;
        color: var(--mainBlue);
    }
    &:focus{
        outline: none;
    }
`;