import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return(
        <FooterWrapper>
            <p>Created by vladudenis</p>
            <Link href="https://github.com/vladudenis" target="_blank">
                <FaGithub />
            </Link>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer`
    padding: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.primaryColor};
`;

const Link = styled.a`
    position: relative;
    margin-left: 1rem;
    color: ${({ theme }) => theme.primaryColor};
    &:hover {
        color: gray;
    }
    &:active {
        color: darkgray;
    }
`;

export default Footer;