import { createGlobalStyle } from "styled-components";
 
export const GlobalStyle = createGlobalStyle`
   *,
   *::before,
   *::after {
       box-sizing: border-box;
       padding: 0;
       margin: 0;
       word-wrap: break-word;
   }

   html {
       font-size: 62.5%;
       line-height: 1.6;
       min-height: 100%;
   }

   body {
        background: ${({ theme }) => theme.primaryColor};
        color: ${({ theme }) => theme.secondaryColor};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
        font-size: 1.6rem;
   }

   header {
       font-size: 2.4rem;
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
       line-height: 1.2;
   }

   a {
       text-decoration: none;
   }

   img {
       display: block;
       width: 100%;
   }
`;