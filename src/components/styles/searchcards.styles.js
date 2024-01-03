import styled from 'styled-components';

export const StyledSearchCards = styled.a`
    width: 100%;
    text-decoration: none;
    color: #000;
    display: flex;
    flex-direction: row;
    padding: 20px 0 15px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.25);

    .search-date {
        min-width: 110px;
        color: #000;
        margin: 0 0 0.7em;
        margin-right: 15px;
        font-size: 0.75em;
        font-family: 'Courier New', Courier, monospace;
    }
    .search-metadata .source-name {
        margin: 0 0 0.4em;
        color: #000;
        font-weight: 900;
        font-size: 0.9em;
    }
    .search-metadata .card-author {
        margin: 0;
        color: #000;
        font-size: 0.8em;
    }
    .card-info {
        display: grid;
        grid-column-gap: calc(1rem * 2 + 1px);
        grid-template-columns: repeat(10,1fr);
    }
    .search-metadata {
        grid-column: span 6;
    }
    .search-metadata h1 {
        margin: 0;
        padding-bottom: 5px;
        color: #000;
        font-family: "Recoleta", serif;
        font-size: 1.5em;
        line-height: 1.15;
    }
    .search-description {
        margin: 0;
        padding-bottom: 5px;
        color: #000;
        font-size: 0.9em;
        line-height: 1.1;
    }
    .card-image {
        width: 100%;
        margin: auto 0;
        padding-bottom: 5px;
        grid-column: span 4;
    }

    @media (max-width: 599px) {
        .search-title h2 {
            font-size: 2.25em;
        }
        .search-card {
            flex-direction: column;
            margin-right: 0;
        }
        .card-info {
            display: flex;
            flex-direction: column-reverse;
        }
    }
`