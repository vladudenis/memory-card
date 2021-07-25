import React from "react";
import styled from "styled-components";
import Toggler from "./utils/Toggler";
import { GiAce } from "react-icons/gi";

const Header = ({theme, themeToggler}) => {
    return(
        <HeaderWrapper>
            <Span>
                <GiAce />
                <h3>Memory Card Game</h3>
            </Span>
            <Toggler theme={theme} toggleTheme={themeToggler} />
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
    height: 8vh;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
`;

const Span = styled.span`
    display: flex;
    & > h3{
        margin-left: 1rem;
    }
`;

export default Header;