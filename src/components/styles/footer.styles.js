import styled from 'styled-components';

export const StyledFooter = styled.footer`
    padding: 28px 40px 0;

    .footer-top {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 28px 0 25px;
    }
    .footer-title {
        margin: 0;
        padding-bottom: 15px;
        font-family: "Recoleta", serif;
        font-size: 2em;
        text-decoration: none;
        color: #000;
    }
    .footer-text {
        text-align: center;
        color:#666;
        font-size: 11px;
        line-height: 1.1;
    }
    .footer-text a {
        text-decoration: none;
        color: inherit;
    }
    .newsletter-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .newsletter-container p {
        margin: 0;
        font-size: 12px;
        line-height: 1.1;
        padding-bottom: 3px;
    }
    .input-container {
        max-width: 100%;
        padding-top: 8px;
        display: flex;
        flex-direction: column;
    }
    .input-container input {
        padding: 10px;
        margin: 0 0 5px;
        border-radius: 0;
        border: 1px solid #000;
    }
    .input-container button {
        padding: 10px;
        margin: 0;
        color: #fff;
        background-color: #000;
        border: 1px solid #000;
    }

    @media (min-width: 600px) {
        .footer-top {
            align-items: unset;
            flex-direction: row;
            justify-content: space-between;
        }
        .footer-title {
            padding: 0;
        }
        .newsletter-container {
            width: 45%;
            display: block;
        }
        .input-container {
            display: flex;
            flex-direction: row;
        }
        .input-container input {
            margin: 0;
        }
    }
`