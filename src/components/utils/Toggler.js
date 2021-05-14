import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"

const Toggler = ({ theme, toggleTheme }) => {
    return(
        <Button onClick={toggleTheme}>
            {theme}
        </Button>
    );
};
Toggler.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
};

const Button = styled.button`
    background: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.body};
    border-radius: 30px;
    cursor: pointer;
    font-size:0.8rem;
    padding: 0.6rem;
`;

export default Toggler;