import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Work Sans', sans-serif;
        font-weight: 700;
    }
    body{
        color: ${({ theme }) => theme.colors.black};
        background: #F3F3F3;
    }
    ::-webkit-scrollbar {
    width: 8px;
    background: #F3F3F3;
    }
    ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    }
`;
