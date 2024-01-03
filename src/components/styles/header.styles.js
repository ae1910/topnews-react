import styled from 'styled-components';
import blackMenu from '../../img/icons8-menu-black.svg';
import menu from '../../img/icons8-menu.svg';
import close from '../../img/icons8-close.svg';

export const StyledHeader = styled.header`
    width: 100%;
    padding: 15px 40px 0;
    z-index: 100;

    .search {
        position: absolute;
        top: 1.5rem;
        right: 40px;
        padding: 8px;
        border-radius: 65px;
        border: 1px solid #000;
        display: flex;
        align-items: center;
    }
    .title-item {
        text-align: center;
        margin: 0;
        padding-bottom: 20px;
        font-family: "Recoleta", serif;
        font-size: 3em;
    }
    .title-item a {
        text-decoration: none;
        color: inherit;
    }

    .mobile-toggle {
        cursor: pointer;
        position: absolute;
        top: 2.5rem;
        left: 2rem;
        z-index: 9999 !important;
        margin: 0 8px;
        background-color: transparent;
        background-image: url(${({pathname}) => (pathname === '/' ? `${menu}` : `${blackMenu}`)});
        background-repeat: no-repeat;
        width: 1.25rem;
        border: 0;
        aspect-ratio: 1;
    }
    nav {
        display: flex;
    }
    .nav-search {
        padding: 8px;
        border-radius: 65px;
        border: 1px solid black;
        display: flex;
        align-items: center;
    }
    .nav-search .search-txt{
        flex-grow: 1;
        padding: 0 15px;
    }
    nav ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        padding: 10px;
    }
    nav ul[data-visible="true"] {
        box-shadow: rgb(0 0 0 / 50%) 0px 0px 0px 10000px;
        transform: translateX(0%);
        position: fixed;
    }
    nav ul li {
        padding: 0 8px;
    }
    .first-search {
        display: none;
        padding: 0;
    }
    .nav-item {
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 599px) {
        position: ${({pathname}) => (pathname === '/' ? 'absolute' : 'unset')};
        top: 0;
        color:${({pathname}) => (pathname === '/' ? '#fff' : 'inherit')};

        .search{
            display: none;
        }
        hr{
            display: none;
        }
        nav:has(ul[data-visible="true"]) {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vh;
            height: 100vh;
        }
        .nav-search {
            display: flex;
        }
        nav ul {
            flex-direction: column;
            padding: min(25vh, 5rem) 2rem;
            position: fixed;
            z-index: 1000;
            inset: 0 20% 0 0;
            color: #000;
            background-color: #fff;
            gap: 1.5em;
            transform: translateX(-100%);
            transition: transform 350ms ease-out;
        }
        .first-search {
            display: block;
        }
        .mobile-toggle[aria-expanded="true"] {
            background-image: url(${close});
        }
    }

    @media (min-width: 600px) {
        height: 145px;
        color: #000;
        display: flex;
        flex-flow: column;
        align-items: center;
        position: unset;

        hr {
            display: block;
            z-index: -1;
        }
        .mobile-toggle {
            display: none;
        }
    }
`